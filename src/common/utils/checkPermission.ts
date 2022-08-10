export const checkPermission = (
  permissions: string[] | undefined,
  scopes: (string | undefined)[]
) => {
  const scopesMap: { [key: string]: boolean } = {}
  scopes.forEach((scope) => {
    if (scope) {
      scopesMap[scope] = true
    }
  })
  return permissions && permissions.some((permission) => scopesMap[permission])
}
