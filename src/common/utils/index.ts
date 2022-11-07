export * from './checkPermission'

export const capitalizeFirstLetter = (s: string) => {
  return s[0].toUpperCase() + s.slice(1).toLocaleLowerCase()
}

export const typeOf = <T>(value: T) => {
  return Object.prototype.toString.call(value).slice(8, -1)
}
