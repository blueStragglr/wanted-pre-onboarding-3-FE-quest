import { emailRegex } from '@/constants/service.constant'

/**
 * 로그인: Inputs Object - input들의 key, value로 이뤄진 에러 객체
 * @interface LoginValidateProps
 * @property {string} email : email
 * @property {string} password : password
 */
export interface LoginValidateProps {
  email: string
  password: string
}

/**
 * 로그인: Errors Object - input들의 key, value로 이뤄진 객체
 * @typedef {Object} LoginValidateErrors
 * @property {string} email  email
 * @property {string} password  password
 */

/**
 * login validation
 * @param {LoginValidateProps} validationObj input들의 key, value로 이뤄진 객체
 * @returns {LoginValidateErrors} input들의 key, value로 이뤄진 에러 객체
 */
export const loginValidate = ({ email, password }: LoginValidateProps): LoginValidateProps => {
  const validateErrors = {
    email: '',
    password: '',
  }
  if (!email) {
    validateErrors.email = '이메일이 입력되지 않았습니다. '
  } else if (!email.match(emailRegex)) {
    validateErrors.email = '이메일 형식으로 입력해주세요.'
  }

  if (!password) {
    validateErrors.password = '비빌번호가 입력되지 않았습니다. '
  } else if (password.length < 8 || password.length > 20) {
    validateErrors.password = '비빌번호는 8자 이상 20자 이하이어야 합니다. '
  }

  return validateErrors
}
