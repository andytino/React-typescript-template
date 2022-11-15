import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query'
import { StorageService } from '@/services/local-storage'
import { storageKeys } from '@/common/constants'
import { BaseQueryApi } from '@reduxjs/toolkit/dist/query/baseQueryTypes'
import { typeOf } from '@/common/utils'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.APP_API_ENDPOINT
  // prepareHeaders: (headers) => {
  //   const authProfile = StorageService.get<>(storageKeys.authProfile, null)
  //   const accessToken: string = authProfile?.accessToken

  //   if (accessToken) {
  //     headers.set('Authorization', `Bearer ${accessToken}`)
  //   }
  //   return headers
  // }
})

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let argsCustom, result
  if (typeOf(args) !== 'string') {
    const tmpArgs = args as FetchArgs
    const body = tmpArgs.body
    const params = tmpArgs.params
    argsCustom = { ...tmpArgs, body, params }
    result = await baseQuery(argsCustom, api, extraOptions)
  } else {
    const url = args as string
    result = await baseQuery(url, api, extraOptions)
  }

  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await baseQuery('auth/refresh-token', api, extraOptions)
    if (refreshResult.data) {
      // store the new token
      // api.dispatch(tokenReceived(refreshResult.data))
      // retry the initial query
      result = await baseQuery(args, api, extraOptions)
    } else {
      // api.dispatch(loggedOut())
    }
  }
  return result
}
