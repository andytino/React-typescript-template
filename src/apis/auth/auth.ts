// Need to use the React-specific entry point to import createApi
import { baseQueryWithReauth } from '@/apis/base'
import { IAuthRequest, IBaseResponse, IVerifyAuth, IAuthMe } from '@/common/ts/interfaces'

import { createApi } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'authApi',
  tagTypes: ['Auth'],

  endpoints: (builder) => ({
    login: builder.mutation<IBaseResponse<IVerifyAuth>, IAuthRequest>({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      })
    }),
    getProfile: builder.query<IBaseResponse<IAuthMe>, void>({
      query: () => ({
        url: 'auth/me',
        method: 'GET'
      })
    })
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useLazyGetProfileQuery } = authApi
