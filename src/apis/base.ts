import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError
} from '@reduxjs/toolkit/dist/query'
import { StorageService } from '@/services/local-storage'
import { storageKeys } from '@/common/constants'
import { typeOf } from '@/common/utils'
import { IBaseResponse, IToken, IVerifyAuth } from '@/common/ts/interfaces'
import { initToken, resetTokenCredentials, setTokenCredentials } from '@/store/authToken'
import { resetCredentials } from '@/store/user'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.APP_API_ENDPOINT,
  prepareHeaders: (headers) => {
    const authTokenProfile = StorageService.get<IToken>(storageKeys.authToken, initToken)
    const accessToken: string = authTokenProfile?.accessToken || ''

    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
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
    const refreshResult = await baseQuery(
      { url: 'auth/refresh-token', method: 'POST' },
      api,
      extraOptions
    )

    if (refreshResult.data) {
      const temp = refreshResult.data as IBaseResponse<IVerifyAuth>
      // store the new token
      const accessToken = temp.result.data?.accessToken || null
      const refreshToken = temp.result.data?.refreshToken || null

      // 1: storing to local storage
      StorageService.set(storageKeys.authToken, {
        accessToken,
        refreshToken
      })

      // 2: update key in store
      if (accessToken && refreshToken) {
        api.dispatch(
          setTokenCredentials({
            accessToken,
            refreshToken
          })
        )
      }

      // retry the initial query
      // test
      result = await baseQuery({ url: 'auth/me-refresh', method: 'GET' }, api, extraOptions)
      // ----
      // result = await baseQuery(args, api, extraOptions)
    } else {
      // logout
      StorageService.remove(storageKeys.authToken)
      api.dispatch(resetCredentials())
      api.dispatch(resetTokenCredentials())
    }
  }
  return result
}
