import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormInput from './FormInput'

import styles from './Form.module.css'

const initialErrorData = {
  id: '',
  pw: '',
}

const Form = () => {
  const navigate = useNavigate()
  const [errorData, setErrorData] = useState(initialErrorData)

  const onSubmit = e => {
    e.preventDefault();
    const isValid = Object.values(errorData).every(value => value === true)
    if (isValid) {
      // 인증 조건
      alert('로그인이 되었습니다.🥳')
      navigate('/')
    } else {
      alert('조건이 잘못 되었습니다. 다시 입력해주세요. 😢')
    }
  }

  return (
    <form className={styles.wrapper}>
      <FormInput
        id={'id'}
        label={'아이디'}
        inputProps={{
          type: 'text',
          placeholder: '아이디를 입력해주세요',
          autoFocus: true,
        }}
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <FormInput
        id={'pw'}
        label={'비밀번호'}
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 입력해주세요',
        }}
        errorData={errorData}
        setErrorData={setErrorData}
      />
      <div className={styles.submit}>
        <input
          type="submit"
          value="로그인"
          onClick={(e) => onSubmit(e)}
        />
      </div>
    </form>
  )
}

export default Form