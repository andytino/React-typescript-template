import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '@/store'
import { IAuthMe } from '@/common/ts/interfaces/auth'
import { USER_ROLES } from '@/common/ts/enums'

export interface IUserState {
  id: number
  name: string
  role: USER_ROLES
}

export const initialUserState: IUserState = {
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
