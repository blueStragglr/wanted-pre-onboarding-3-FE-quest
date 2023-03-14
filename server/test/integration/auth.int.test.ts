import app from '@src/app'
import config from '@src/config'
import { IUser } from '@src/model/User'
import { createRandomUserInfo } from '@test/mocks/user.mock'
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

const newUser = createRandomUserInfo()

it('POST /api/auth/signup', async () => {
  const response = await request(app).post('/api/auth/signup').send(newUser)
  const { statusCode } = response
  const { id, nickname } = response.body as IUser
  expect(statusCode).toBe(201)
  expect(id).toBe(newUser.id)
  expect(nickname).toBe(newUser.nickname)
})

it('should return 500 on POST /api/auth/signup', async () => {
  const response = await request(app).post('/api/auth/signup').send({ id: 'no nickname' })
  expect(response.body).toStrictEqual({
    message: 'User validation failed: nickname: Path `nickname` is required.',
  })
})
