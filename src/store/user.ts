import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/store'
import { IAuthMe } from '@/common/ts/interfaces/auth'
import { USER_ROLES } from '@/common/ts/enums'

export const initialUserState = {
  id: 0,
  name: 'GUEST',
  role: USER_ROLES['GUEST']
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setCredentials: (state, action: PayloadAction<IAuthMe | null>) => ({
      ...state,
      ...action.payload
    }),
    resetCredentials: () => initialUserState
  }
})

// Action creators are generated for each case reducer function
export const { setCredentials, resetCredentials } = userSlice.actions

export default userSlice.reducer

export const selectCurrentUser = (state: RootState) => state.user
