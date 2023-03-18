import { createServer } from '@src/app'
import config from '@src/config'
import { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import { UserInput } from '@src/types/users.type'
import { mockSuccessUserInput } from '@test/mocks/user.mock'
import { Application } from 'express'
import { StatusCodes } from 'http-status-codes'
import mongoose, { ConnectOptions } from 'mongoose'
import request from 'supertest'

let app: Application

beforeEach(done => {
  app = createServer()

  mongoose.connect(
    config.MONGO_TEST_URI,
    {
      useNewUrlParser: true,
    } as ConnectOptions,
    () => done(),
  )
})

afterEach(done => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  })
})

describe('Sign Up Integration', () => {
  let newUserInput: UserInput
  beforeEach(() => {
    newUserInput = mockSuccessUserInput
  })
  it('POST /api/auth/signup', async () => {
    const response = await request(app).post('/api/auth/signup').send(newUserInput)
    const { statusCode } = response
    const { message } = response.body as { message: string; token: string }
    expect(statusCode).toBe(StatusCodes.OK)
    expect(message).toBe(USER_SUCCESS.SIGN_UP)
  })

  it('should return 500 on POST /api/auth/signup', async () => {
    const response = await request(app).post('/api/auth/signup').send({ email: 'Fake Nickname' })
    expect(response.body).toStrictEqual({
      details: USER_VALIDATION_ERRORS.EMPTY_FORM,
    })
  })
})

describe('Login Integration', () => {
  let newUserInput: UserInput
  beforeEach(() => {
    newUserInput = mockSuccessUserInput
  })
  it('POST /api/auth/login', async () => {
    await request(app).post('/api/auth/signup').send(newUserInput)
    const response = await request(app).post('/api/auth/login').send(newUserInput)
    const { statusCode } = response
    const { message, token } = response.body as { message: string; token: string }
    expect(statusCode).toBe(StatusCodes.OK)
    expect(message).toBe(USER_SUCCESS.LOGIN)
    expect(token).not.toBeNull()
    expect(typeof token).toBe('string')
  })

  it('should return 500 on POST /api/auth/login', async () => {
    const response = await request(app).post('/api/auth/login').send({ email: 'Fake Nickname' })
    expect(response.body).toStrictEqual({
      details: USER_VALIDATION_ERRORS.EMPTY_FORM,
    })
  })
})
