import { combineReducers, configureStore } from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'
import authTokenReducer from './authToken'
import userReducer from './user'
import { userApi } from '@/apis/user/user'
import { authApi } from '@/apis/auth/auth'
import { notificationsApi } from '@/apis/notifications/notifications'
import { rtkQueryErrorLogger } from '@/apis/error/error'

const rootReducer = combineReducers({
  user: userReducer,
  authToken: authTokenReducer,
  [userApi.reducerPath]: userApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [notificationsApi.reducerPath]: notificationsApi.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(rtkQueryErrorLogger)
        .concat(userApi.middleware)
        .concat(authApi.middleware)
        .concat(notificationsApi.middleware),
    preloadedState
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
