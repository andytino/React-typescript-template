export const checkPermission = (permissions: string[], scopes: string[]) => {
  const scopesMap: { [key: string]: boolean } = {}
  scopes.forEach((scope) => (scopesMap[scope] = true))
  return permissions.some((permission) => scopesMap[permission])
}
