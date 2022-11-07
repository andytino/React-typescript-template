import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from '@/services/base'
import { IBaseResponse, UserResponse } from '@/common/ts/interfaces'

export const userApi = createApi({
  baseQuery: baseQuery,
  reducerPath: 'userApi',
  endpoints: (builder) => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getUsers: builder.query<IBaseResponse<UserResponse[]>, void>({
      query: () => ({
        url: '/user'
      })
    })
  })
})

export const { useGetUsersQuery } = userApi
