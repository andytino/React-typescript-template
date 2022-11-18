import { baseQueryWithReauth } from '@/apis/base'
import { IBaseResponse } from '@/common/ts/interfaces'
import {
  INotificationsResponse,
  IUserNotificationsRequest
} from '@/common/ts/interfaces/notifications'
import { createApi } from '@reduxjs/toolkit/query/react'

import { io } from 'socket.io-client'

export const notificationsApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: 'notiApi',
  endpoints: (builder) => ({
    getGeneralNotifications: builder.query<IBaseResponse<INotificationsResponse[]>, void>({
      queryFn: () => ({
        data: {
          success: true,
          result: {
            data: []
          }
        }
      }),

      async onCacheEntryAdded(_, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const socket = io('http://localhost:8080')
        try {
          await cacheDataLoaded
          const listener = (event: IBaseResponse<INotificationsResponse[]>) => {
            updateCachedData((draft) => {
              if (draft.result.data) {
                draft.result.data = [...draft.result.data, ...(event.result.data || [])]
              }
            })
          }
          socket.on('notifications', listener)
        } catch (err) {
          console.log('err', err)
        }
        await cacheEntryRemoved
        socket.close()
      }
    }),
    getUserNotifications: builder.query<
      IBaseResponse<INotificationsResponse[]>,
      IUserNotificationsRequest
    >({
      queryFn: () => ({
        data: {
          success: true,
          result: {
            data: []
          }
        }
      }),

      async onCacheEntryAdded(arg, { updateCachedData, cacheDataLoaded, cacheEntryRemoved }) {
        const socket = io('http://localhost:8080', {
          query: {
            id: arg.id
          }
        })
        try {
          await cacheDataLoaded
          const listener = (event: IBaseResponse<INotificationsResponse[]>) => {
            updateCachedData((draft) => {
              if (draft.result.data) {
                draft.result.data = [...draft.result.data, ...(event.result.data || [])]
              }
            })
          }
          socket.on('user_notifications', listener)
        } catch (err) {
          console.log('err', err)
        }
        await cacheEntryRemoved
        socket.close()
      }
    })
  })
})

export const { useGetGeneralNotificationsQuery, useGetUserNotificationsQuery } = notificationsApi
