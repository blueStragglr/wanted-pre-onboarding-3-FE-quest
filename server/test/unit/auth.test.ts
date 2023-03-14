import { authController } from '@src/api/controllers'
import UserModel, { IUser } from '@src/model/User'
import { createRandomUserInfo } from '@test/mocks/user.mock'
import { NextFunction } from 'express'
import httpMock from 'node-mocks-http'

jest.mock('@src/model/User')

let req = httpMock.createRequest()
let res = httpMock.createResponse()
const next: NextFunction = jest.fn()

beforeEach(() => {
  req = httpMock.createRequest()
  res = httpMock.createResponse()
})

describe('Product Controller Create', () => {
  let newUser: IUser
  beforeEach(() => {
    newUser = createRandomUserInfo()
    req.body = newUser
  })
  it('should have a createProduct function', () => {
    expect(typeof authController.signUp).toBe('function')
  })
  it('should call UserModel.create', async () => {
    await authController.signUp(req, res, next)
    expect(UserModel.create).toBeCalledWith(req.body)
  })
  it('should return 201 response code', async () => {
    await authController.signUp(req, res, next)
    expect(res.statusCode).toBe(201)
    expect(res._isEndCalled()).toBeTruthy()
  })
  it('should return json body in response', async () => {
    ;(UserModel.create as jest.Mock).mockReturnValue(req.body)
    await authController.signUp(req, res, next)
    expect(res._getJSONData()).toStrictEqual(newUser)
  })
  it('should handle errors', async () => {
    const errorMessage = { message: 'description property missing' }
    const rejectedPromise = Promise.reject(errorMessage)
    ;(UserModel.create as jest.Mock).mockReturnValue(rejectedPromise)
    await authController.signUp(req, res, next)
    expect(next).toBeCalledWith(errorMessage)
  })
})
