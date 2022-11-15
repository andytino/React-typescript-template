import { USER_ROLES } from '../enums'

export interface IAuthMe {
  id: number
  name: string
  email?: string
  avatar?: string | null
  status?: number
  role: USER_ROLES
  createdAt?: string
  updatedAt?: string
  deletedAt?: string | null
}

export interface IAuthRequest {
  email: string
  password: string
}
export interface IAuthResponse {
  token: string
}

export interface IToken {
  accessToken: string | null
  refreshToken: string | null
}

export interface IVerifyAuth extends IToken {
  id: number
  name: string
  email: string
  role: number
  tokenExpireTime?: string | null
}
