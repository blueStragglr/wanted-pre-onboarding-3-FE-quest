import { userController } from '@src/api/controllers'
import userService from '@src/services/user.service'
import { createRandomUserList } from '@test/mocks/user.mock'
import { NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'
import httpMock from 'node-mocks-http'

jest.mock('@src/model/User')

let req = httpMock.createRequest()
let res = httpMock.createResponse()
const next: NextFunction = jest.fn()

beforeEach(() => {
  req = httpMock.createRequest()
  res = httpMock.createResponse()
})

describe('User Controller getUsers', () => {
  const allUsers = createRandomUserList(10)
  it('should return StatusCodes.OK return all Users', async () => {
    jest.spyOn(userService, 'findAllUser').mockResolvedValueOnce(allUsers as any[])

    await userController.getUsers(req, res, next)

    expect(res.statusCode).toBe(StatusCodes.OK)
    expect(res._isEndCalled()).toBeTruthy()
    expect(res._getJSONData()).toStrictEqual(allUsers)
  })
  it('should call the next function with an error if an error occurs during all user find', async () => {
    jest.spyOn(userService, 'findAllUser').mockRejectedValueOnce(new Error('Database error'))
    await userController.getUsers(req, res, next)
    expect(next).toBeCalledWith(new Error('Database error'))
  })
})
