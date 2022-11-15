interface Props {
  set: (key: string, data: unknown) => void
  get: <T>(key: string, defaultValue: T) => T
  remove: (key: string) => void
}

export const StorageService: Props = {
  set: (key, data) => {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (err) {
      //
    }
  },

  get: (key, defaultValue) => {
    try {
      const data = localStorage.getItem(key)
      if (data === null) {
        return defaultValue
      }
      return JSON.parse(data)
    } catch (err) {
      return defaultValue
    }
  },

  remove: (key: string) => {
    localStorage.removeItem(key)
  }

  // has: (key: string) => {
  //   return !!localStorage.getItem(key)
  // }
}
