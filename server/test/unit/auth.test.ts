import { authController } from '@src/api/controllers'
import authService, { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import userService from '@src/services/user.service'
import { createToken } from '@src/utils/authorizeUtils'
import { createError } from '@src/utils/responseUtils'
import { createRandomUser, createRandomUserInput } from '@test/mocks/user.mock'
import { NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import httpMock from 'node-mocks-http'

describe('Auth Controller : signUp', () => {
  const testBody = createRandomUserInput()

  let req = httpMock.createRequest()
  let res = httpMock.createResponse()
  const next: NextFunction = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    req = httpMock.createRequest()
    res = httpMock.createResponse()
    req.body = testBody
  })

  afterEach(() => {
    jest.resetAllMocks()
  })
  it('should return a EMPTY_FORM, BAD_REQUEST response if one of felid is empty', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.EMPTY_FORM,
    }
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.signUp(req, res, next)
    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })
  it('should return a INVALID_EMAIL response If the email validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
    }
    const inValidInput = { ...testBody, email: 'asdf' }
    req.body = inValidInput
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.signUp(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(inValidInput)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })
  it('should return a INVALID_EMAIL response If the password validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
    }
    const inValidInput = { ...testBody, email: 'asdf' }
    req.body = inValidInput
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.signUp(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(inValidInput)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })

  it('should return a 409 error if the user already exists', async () => {
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue({ isValid: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mockFindUser = jest.spyOn(userService, 'findUser').mockResolvedValueOnce(createRandomUser() as any)

    await authController.signUp(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(mockFindUser).toHaveBeenCalledWith({ email: testBody.email })
    expect(res.statusCode).toBe(StatusCodes.CONFLICT)
    expect(res._getJSONData()).toStrictEqual(createError(USER_VALIDATION_ERRORS.EXIST_USER))
    expect(next).not.toHaveBeenCalled()
  })
  it('should StatusCodes.OK create a new user and return a success message', async () => {
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue({ isValid: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mockFindUser = jest.spyOn(userService, 'findUser').mockResolvedValueOnce(null)
    const mockCreateUser = jest.spyOn(userService, 'createUser').mockResolvedValueOnce({ email: testBody.email })

    await authController.signUp(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(mockFindUser).toHaveBeenCalledWith({ email: testBody.email })
    expect(mockCreateUser).toBeCalledWith({ email: testBody.email, password: testBody.password })
    expect(res.statusCode).toBe(StatusCodes.OK)
    expect(res._getJSONData()).toStrictEqual({ message: USER_SUCCESS.SIGN_UP })
  })
  it('should call next with an error if createUser throws an error', async () => {
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue({ isValid: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mockFindUser = jest.spyOn(userService, 'findUser').mockResolvedValueOnce(null)
    const mockCreateUser = jest.spyOn(userService, 'createUser').mockRejectedValueOnce(new Error('Database error'))

    await authController.signUp(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(mockFindUser).toHaveBeenCalledWith({ email: testBody.email })
    expect(mockCreateUser).toBeCalledWith({ email: testBody.email, password: testBody.password })
    expect(next).toBeCalledWith(new Error('Database error'))
  })
})

describe('Auth controller: login', () => {
  const testBody = createRandomUserInput()

  let req = httpMock.createRequest()
  let res = httpMock.createResponse()
  const next: NextFunction = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    req = httpMock.createRequest()
    res = httpMock.createResponse()
    req.body = testBody
  })

  afterEach(() => {
    jest.resetAllMocks()
  })

  it('should return a EMPTY_FORM, BAD_REQUEST response if one of felid is empty', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.EMPTY_FORM,
    }
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.login(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })
  it('should return a INVALID_EMAIL response If the email validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_EMAIL,
    }
    const inValidInput = { ...testBody, email: 'asdf' }
    req.body = inValidInput
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.login(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(inValidInput)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })
  it('should return a INVALID_EMAIL response If the password validate condition is not met', async () => {
    const errorReturn = {
      isValid: false,
      message: USER_VALIDATION_ERRORS.INVALID_PASSWORD,
    }
    const inValidInput = { ...testBody, email: 'asdf' }
    req.body = inValidInput
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue(errorReturn)

    await authController.login(req, res, next)

    expect(mockAuthValidator).toHaveBeenCalledWith(inValidInput)
    expect(res.statusCode).toBe(StatusCodes.BAD_REQUEST)
    expect(res._getJSONData()).toStrictEqual(createError(errorReturn.message))
    expect(next).not.toHaveBeenCalled()
  })

  it('should StatusCodes.OK and return a token if the user is found ', async () => {
    const expectedUser = createRandomUser()
    const expectedToken = createToken({ email: expectedUser.email, _id: expectedUser._id })
    const mockAuthValidator = jest.spyOn(authService, 'authValidator').mockReturnValue({ isValid: true })
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mockFindUser = jest.spyOn(userService, 'findUser').mockResolvedValueOnce(expectedUser as any)

    await authController.login(req, res, next)

    expect(next).not.toHaveBeenCalled()

    expect(mockAuthValidator).toHaveBeenCalledWith(testBody)
    expect(mockFindUser).toHaveBeenCalledWith({ email: testBody.email, password: testBody.password })
    expect(res.statusCode).toBe(StatusCodes.OK)
    expect(res._getJSONData()).toStrictEqual({ message: USER_SUCCESS.LOGIN, token: expectedToken })
  })
})
