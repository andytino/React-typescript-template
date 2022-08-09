import { useState } from 'react'

export const useLocalStorage = (keyname: string, defaultValue: unknown) => {
  const [storedValue, setStoreValue] = useState(() => {
    try {
      const value = window.localStorage.getItem(keyname)

      if (value) {
        return JSON.parse(value)
      } else {
        window.localStorage.setItem(keyname, JSON.stringify(defaultValue))
        return defaultValue
      }
    } catch (err) {
      return defaultValue
    }
  })

  const setValue = (newValue: unknown) => {
    try {
      window.localStorage.setItem(keyname, JSON.stringify(newValue))
    } catch (err) {
      setStoreValue(newValue)
    }
  }

  return [storedValue, setValue]
}
