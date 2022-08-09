import { EROLES } from '@/common/ts/enums'

export const SCOPES = {
  canView: 'can-view',
  canViewMiddle: 'can-view-middle',
  canViewAdvanced: 'can-view-advanced',
  canCreate: 'can-create',
  canEdit: 'can-edit',
  canDelete: 'can-delete'
}

export const { canView, canViewMiddle, canViewAdvanced, ...edit } = SCOPES

const FULL_SCOPES = Object.keys(SCOPES)
const EDIT_SCOPES = Object.keys(edit)

export const PERMISSIONS = {
  [EROLES.GUEST]: [canView],
  [EROLES.USER]: [canView, ...EDIT_SCOPES],
  [EROLES.ADMIN]: [canView, canViewMiddle, ...EDIT_SCOPES],
  [EROLES.SUPER_ADMIN]: [...FULL_SCOPES]
}
