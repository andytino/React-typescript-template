import { USER_ROLES } from '@/common/ts/enums'

export interface AuthUser {
  username: string
  roles: USER_ROLES
}

export interface UserResponse {
  id: string
  name: string
}
