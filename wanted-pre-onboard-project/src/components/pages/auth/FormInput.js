import React, { useContext } from 'react'
import { FormContext } from './SignIn'

import styles from './FormInput.module.css'

const idRegex = /[a-z0-9-_]{5,20}/
const pwRegex = /[A-Za-z0-9]{8,16}/

const errorMessage = {
  required: '필수 정보입니다.',
  invalidId:
    '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
  invalidPw: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
}

const FormInput = ({ id, label, inputProps, errorData, setErrorData }) => {
  const { formData, setFormData } = useContext(FormContext)

  // 유효성 검사
  const checkErrorMsg = (inputId) => {
    const value = formData[inputId]
    let result
    if (value.length === 0) {
      return 'required'
    } else {
      switch (inputId) {
        case 'id':
          result = idRegex.test(value) ? true : 'invalidId'
          break
        case 'pw':
          result = pwRegex.test(value) ? true : 'invalidPw'
          break
        default:
          return
      }
    }
    setErrorData((prev) => ({ ...prev, [inputId]: result }))
  }


  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
      </label>
      <input
        autoComplete="off"
        value={formData[id]}
        onChange={(e) =>
          setFormData({ ...formData, [id]: e.target.value })
        }
        {...inputProps}
        onBlur={() => checkErrorMsg(id)}
      />
      <div className={styles.errorMsg}>
        {errorMessage[errorData[id]]}
      </div>
    </div>
  )
}

export default FormInput