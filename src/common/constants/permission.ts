import { USER_ROLES } from '@/common/ts/enums'

export const SCOPES = {
  canView: 'can-view',
  canViewMiddle: 'can-view-middle',
  canViewAdvanced: 'can-view-advanced',
  canCreate: 'can-create',
  canEdit: 'can-edit',
  canDelete: 'can-delete'
}

export const { canView, canViewMiddle, canViewAdvanced, ...edit } = SCOPES

const FULL_SCOPES = Object.values(SCOPES)
const EDIT_SCOPES = Object.values(edit)

export const PERMISSIONS: { [key in USER_ROLES]: string[] } = {
  [USER_ROLES.GUEST]: [canView],
  [USER_ROLES.USER]: [canView, ...EDIT_SCOPES],
  [USER_ROLES.ADMIN]: [canView, canViewMiddle, ...EDIT_SCOPES],
  [USER_ROLES.SUPER_ADMIN]: [...FULL_SCOPES]
}
