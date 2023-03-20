import { useState } from 'react'

type ValidateChecker<T> = (inputsObj: T) => Record<keyof T, string>

/**
 * input 태그의 에러 체크를 언제할지 정하는 mode (onChange, onSubmit)
 * @property {"onChange"} onChange 각각의 input 태그 에서 onchange이벤트가 발생할 때 onchange가 발생한 태그만 validation체크
 * @property {"onSubmit"} onSubmit 제출할 때 모든 input태그의 validation 체크
 */
const FORM_MODE = {
  onChange: 'onChange',
  onSubmit: 'onSubmit',
} as const

/**
 * useform이 동작하기 위해 외부에서 주입해야하는 params
 * @interface useFormOptions
 * @property {Object} initialValues  form에서 사용할 input들의 객체
 * @property {(inputValues: Object) => Promise<void>} submitCallback  form에서 사용할 submit 함수
 * @property {(inputValues: Object) => Object} validate  form에서 사용할 Input들의 객체에 대한 validation을 체크하는 함수
 * @property {FormMode} mode
 */
interface UseFormOptions<T> {
  initialValues: T
  submitCallback: (inputValues: T) => Promise<void>
  validate: ValidateChecker<T>
  mode?: keyof typeof FORM_MODE
}

/**
 * useForm을 사용하는 곳에서 사용할 method 및 state
 * @interface useFormReturns
 * @property {Object} inputValues  form에서 사용하는 input들의 객체
 * @property {Object} validateError   form에서 사용하는 input에 해당하는 에러 객체
 * @property {(Event) => void} onChangeHandler  inputValues 중 모든 text Input OnChange를 위한 함수
 * @property {(Event) => void} onChangeHandlerWithSelect  inputValues 중 모든 select 태그 OnChange를 위한 함수
 * @property {(Event) => Promise<void>} submitHandler  모든 validate 조건을 만족하면 submitCallback 실행
 * @property {(target: string) => boolean} isTargetSatisfyValidate  validation을 체크하고 싶은 input의 키 값을 넣으면 boolean을 반환
 * @property {boolean} satisfyAllValidates  validateError 객체에 있는 모든 데이터의 value가 ""이거나 null이면 true를 반환
 */
export interface UseFormReturns<T> {
  inputValues: T
  validateError: Record<keyof T, string>
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeHandlerWithSelect: ({ id, value }: { id: string; value: string }) => void
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => Promise<void>
  isTargetSatisfyValidate: (target: keyof T) => boolean
  satisfyAllValidates: boolean
}

/**
 * custom useForm hooks
 * @param {UseFormOptions} useFormOptions useform이 동작하기 위해 외부에서 주입해야하는 params
 * @returns {UseFormReturns} useForm을 사용하는 곳에서 사용할 method 및 값들
 */
const useForm = <T extends Record<string, string>>({
  initialValues,
  submitCallback,
  validate,
  mode = FORM_MODE.onChange,
}: UseFormOptions<T>): UseFormReturns<T> => {
  const [inputValues, setInputValues] = useState<T>(initialValues)
  const [validateError, setValidateError] = useState<Record<keyof T, string>>({} as Record<keyof T, string>)

  const resetInputValues = () => {
    setInputValues(initialValues)
  }

  const resetValidateErrors = () => {
    setValidateError({} as Record<keyof T, string>)
  }

  /**
   * inputValues를 동시에 검사해서 모든 input에 에러가 없으면 true변환
   * @type {boolean}
   */
  const satisfyAllValidates: boolean = Object.values(validate(inputValues)).every(value => !value)

  /**
   * validation을 체크하고 싶은 input의 키 값을 넣으면 boolean을 반환
   * @param {string} target validation을 체크하고 싶은 input의 키 값
   * @returns {boolean} 에러 메시지가 없으면 false 있으면 true
   */
  const isTargetSatisfyValidate = (target: keyof T): boolean => !!validateError[target]

  /**
   * 에러를 표시할 방법에 따라 에러객체를 반환하는 함수
   * @param {string} id input태그의 key값
   * @param {string} value  input태그의 값
   */
  const onChangeError = (id: string, value: string) => {
    if (mode === FORM_MODE.onChange) {
      const res = validate({ ...inputValues, [id]: value })
      setValidateError({ ...validateError, [id]: res[id] })
    } else {
      setValidateError(validate({ ...inputValues, [id]: value }))
    }
  }

  /**
   * inputValues 중 모든 text Input OnChange를 위한 함수
   * @param {Event} event React Change Event
   * @return {void}
   */
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = event.target
    setInputValues({ ...inputValues, [id]: value })
    onChangeError(id, value)
  }

  /**
   * inputValues 중 모든 select 태그 OnChange를 위한 함수
   * @param {Object}
   * @return {void}
   */
  const onChangeHandlerWithSelect = ({ id, value }: { id: string; value: string }): void => {
    setInputValues({ ...inputValues, [id]: value })
    onChangeError(id, value)
  }

  const showEntireError = () => {
    setValidateError(validate({ ...inputValues }))
    Object.values(validateError)
      .filter(error => error)
      .forEach(error => {
        alert('error')
      })
  }

  /**
   * 모든 validate 조건을 만족하면 submit callback 실행
   * @param {Event} event React FormEvent
   * @return {void}
   */
  const submitHandler = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event && event.preventDefault()

    if (!satisfyAllValidates) {
      showEntireError()
      return
    }
    await submitCallback(inputValues)
    resetInputValues()
    resetValidateErrors()
  }

  return {
    inputValues,
    validateError,
    onChangeHandler,
    onChangeHandlerWithSelect,
    submitHandler,
    satisfyAllValidates,
    isTargetSatisfyValidate,
  }
}

export default useForm
