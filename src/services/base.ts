import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.APP_API_ENDPOINT
  //   prepareHeaders: (headers) => {
  //     const authProfile = StorageService.get(storageKeys.authProfile)
  //     const accessToken: string = authProfile?.accessToken

  //     if (accessToken) {
  //       headers.set('Authorization', `Bearer ${accessToken}`)
  //     }
  //     return headers
  //   }
})
