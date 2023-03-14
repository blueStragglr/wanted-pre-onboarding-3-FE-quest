import { userController } from '@src/api/controllers'
import UserModel from '@src/model/User'
import { createRandomUserList } from '@test/mocks/user.mock'
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

describe('Product Controller Get', () => {
  const allUsers = createRandomUserList(10)
  it('should have a getUsers function', () => {
    expect(typeof userController.getUsers).toBe('function')
  })
  it('should call UserModel.find()', async () => {
    await userController.getUsers(req, res, next)
    expect(UserModel.find as jest.Mock).toHaveBeenCalled()
  })
  it('should return 200 response', async () => {
    await userController.getUsers(req, res, next)
    expect(res.statusCode).toBe(200)
    expect(res._isEndCalled()).toBeTruthy()
  })
  it('should return json body in response', async () => {
    ;(UserModel.find as jest.Mock).mockReturnValue(allUsers)
    await userController.getUsers(req, res, next)
    expect(res._getJSONData()).toStrictEqual(allUsers)
  })
  it('should handle errors', async () => {
    const errorMessage = { message: 'Error finding product data' }
    const rejectedPromise = Promise.reject(errorMessage)
    ;(UserModel.find as jest.Mock).mockReturnValue(rejectedPromise)
    await userController.getUsers(req, res, next)
    expect(next).toBeCalledWith(errorMessage)
  })
})
