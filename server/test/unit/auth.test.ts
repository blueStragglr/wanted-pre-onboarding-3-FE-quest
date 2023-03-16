import { authController } from '@src/api/controllers'
import authService, { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import userService from '@src/services/user.service'
import { createToken } from '@src/utils/authorizeUtils'
import { createError } from '@src/utils/responseUtils'
import { NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import httpMock from 'node-mocks-http'

const testBody = {
  email: 'test@example.com',
  password: 'testPassword',
}

let req = httpMock.createRequest()
let res = httpMock.createResponse()
const next: NextFunction = jest.fn()

beforeEach(() => {
  req = httpMock.createRequest()
  res = httpMock.createResponse()
})

describe('Auth Controller signup', () => {
  it('should return a EMPTY_FORM BAD_REQUEST response if one of felid is empty', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.EMPTY_FORM,
    }
    jest.spyOn(authService, 'loginValidator').mockReturnValue(errorReturn)
    await authController.signUp(req, res, next)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getData()).toStrictEqual(createError(errorReturn.message))
  })
  it('should return a INVALID_EMAIL response If the email validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
    }
    req.body = { ...testBody, email: 'asdf' }
    jest.spyOn(authService, 'loginValidator').mockReturnValue(errorReturn)
    await authController.signUp(req, res, next)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getData()).toStrictEqual(createError(errorReturn.message))
  })
  it('should return a INVALID_EMAIL response If the password validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
    }
    req.body = { ...testBody, password: 'asdf' }
    jest.spyOn(authService, 'loginValidator').mockReturnValue(errorReturn)
    await authController.signUp(req, res, next)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getData()).toStrictEqual(createError(errorReturn.message))
  })

  beforeEach(() => {
    jest.clearAllMocks()
    req.body = testBody
    jest.spyOn(authService, 'loginValidator').mockReturnValue({ isValid: true })
  })

  it('should check if the user already exists', async () => {
    const mockFindUser = jest.spyOn(userService, 'findUser').mockResolvedValueOnce(true)
    await authController.signUp(req, res, next)
    expect(mockFindUser).toHaveBeenCalled()
    expect(res.statusCode).toBe(StatusCodes.CONFLICT)
    expect(res._getData()).toStrictEqual(createError(USER_VALIDATION_ERRORS.EXIST_USER))
  })
  it('should StatusCodes.OK create a new user and return a token', async () => {
    jest.spyOn(userService, 'findUser').mockResolvedValueOnce(false)
    const mockCreateUser = jest.spyOn(userService, 'createUser').mockResolvedValueOnce({ email: testBody.email })
    await authController.signUp(req, res, next)
    expect(mockCreateUser).toBeCalledWith({ email: testBody.email, password: testBody.password })
    expect(res.statusCode).toBe(StatusCodes.OK)
    expect(res._getJSONData()).toStrictEqual({ message: USER_SUCCESS.SIGN_UP, token: createToken(testBody.email) })
  })
  it('should call the next function with an error if an error occurs during user creation', async () => {
    jest.spyOn(userService, 'findUser').mockResolvedValueOnce(false)
    jest.spyOn(userService, 'createUser').mockRejectedValueOnce(new Error('Database error'))
    await authController.signUp(req, res, next)
    expect(next).toBeCalledWith(new Error('Database error'))
  })
})
