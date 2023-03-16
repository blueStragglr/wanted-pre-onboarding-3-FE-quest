import app from '@src/app'
import config from '@src/config'
import { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import { createToken } from '@src/utils/authorizeUtils'
import { createRandomUserInput } from '@test/mocks/user.mock'
import { StatusCodes } from 'http-status-codes'
import mongoose, { ConnectOptions } from 'mongoose'
import request from 'supertest'

beforeEach(done => {
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

const newUserInput = createRandomUserInput()

it('POST /api/auth/signup', async () => {
  const response = await request(app).post('/api/auth/signup').send(newUserInput)
  const { statusCode } = response
  const { message, token } = response.body as { message: string; token: string }
  expect(statusCode).toBe(StatusCodes.OK)
  expect(message).toBe(USER_SUCCESS.SIGN_UP)
  expect(token).toBe(createToken(newUserInput.email))
})

it('should return 500 on POST /api/auth/signup', async () => {
  const response = await request(app).post('/api/auth/signup').send({ email: 'Fake Nickname' })
  expect(response.body).toStrictEqual({
    details: USER_VALIDATION_ERRORS.EMPTY_FORM,
  })
})
