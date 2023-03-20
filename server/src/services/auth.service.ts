import bcrypt from 'bcrypt'
import validator from 'validator'

const authValidator = (loginForm: { email: string; password: string }) => {
  if (Object.values(loginForm).some(v => !v)) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.EMPTY_FORM,
    }
  }

  if (!validator.isEmail(loginForm.email)) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
    }
  }
  if (!validator.isLength(loginForm.password, { min: 8 })) {
    return {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
    }
  }
  return {
    isValid: true,
  }
}

const hashPassword = async (plaintextPassword: string) => {
  const salt = await bcrypt.genSalt(saltRounds)
  const hash = await bcrypt.hash(plaintextPassword, salt)
  return hash
}

const comparePassword = async (plaintextPassword: string, hash: string) => {
  const result = await bcrypt.compare(plaintextPassword, hash)
  return result
}

const authService = {
  authValidator,
  hashPassword,
  comparePassword,
}

export default authService

const saltRounds = 10

export const USER_VALIDATION_ERRORS = {
  EMPTY_FORM: '이메일 / 패스워드 값이 비어있습니다',
  INVALID_EMAIL: '이메일 형식에 맞게 입력해주세요',
  INVALID_PASSWORD: '패스워드 길이는 8 이상이어야 합니다',
  PASSWORD_NOT_MATCH: '패스워드가 일치하지 않습니다.',
  USER_NOT_FOUND: '로그인에 실패했습니다',
  EXIST_USER: '이미 존재하는 유저입니다',
}

export const USER_SUCCESS = {
  SIGN_UP: '계정이 성공적으로 생성되었습니다.',
  LOGIN: '성공적으로 로그인 했습니다.',
}
