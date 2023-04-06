type BrowserStorageValue<T> = T extends string ? string : Record<string, unknown>

interface BrowserStorage {
  set: <T extends string | Record<string, unknown>>(key: string, value: T) => void
  get: <T extends string | Record<string, unknown>>(key: string) => BrowserStorageValue<T> | null
  reset: () => void
  remove: (key: string) => void
}

const browserStorage: BrowserStorage = {
  set: (key, value) => {
    const serializedValue = typeof value === 'string' ? value : JSON.stringify(value)
    localStorage.setItem(key, serializedValue)
  },
  get: key => {
    const item = localStorage.getItem(key)
    if (item === null) return null
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(item)
    } catch {
      return item
    }
  },
  reset: () => {
    localStorage.clear()
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
}

export default browserStorage
