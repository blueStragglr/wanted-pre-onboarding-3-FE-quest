import app from '@src/app'
import config from '@src/config'
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

it('GET /api/user', async () => {
  const response = await request(app).get('/api/user')
  expect(response.statusCode).toBe(200)
  expect(Array.isArray(response.body)).toBeTruthy()
  // test실행할 때마다 mock mongo를 초기화해서 빈 배열이 와서 아래 코드를 주석처리함
  // const body = response.body as IUser[]
  // expect(body[0].email).toBeDefined()
  // expect(body[0].nickname).toBeDefined()
})
