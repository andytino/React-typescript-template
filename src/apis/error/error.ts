import { MiddlewareAPI, isRejectedWithValue, AnyAction, Dispatch } from '@reduxjs/toolkit'
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (api: MiddlewareAPI) => (next: Dispatch<AnyAction>) => (action: any) => {
    // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
    // console.log('action', action)
    // console.log('action===', isRejectedWithValue(action))
    // console.log('api', api.getState())
    if (isRejectedWithValue(action)) {
      console.warn('We got a rejected action!')
      // toast.warn({ title: 'Async error!', message: action.error.data.message })
    }

    return next(action)
  }
