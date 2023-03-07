import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react'
type ReturnTypes<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  (e: ChangeEvent<HTMLInputElement>) => void
]
export const useInput = <T>(initialData: T): ReturnTypes<T> => {
  const [value, setValue] = useState(initialData)
  const handler = useCallback((e: any) => {
    setValue(e.target.value)
  }, [])
  return [value, setValue, handler]
}
