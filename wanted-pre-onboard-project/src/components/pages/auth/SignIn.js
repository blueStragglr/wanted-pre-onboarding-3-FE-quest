import React, { createContext, useState } from 'react'
import Form from './Form'

import styles from './SignIn.module.css'

const initialFormData = {
  id: '',
  pw: '',
}

export const FormContext = createContext({ initialFormData })

const SignIn = () => {
  const [formData, setFormData] = useState(initialFormData)

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Form />
        </main>
      </div>
    </FormContext.Provider>
  )
}

export default SignIn