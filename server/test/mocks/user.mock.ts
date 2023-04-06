import { faker } from '@faker-js/faker/locale/ko'
import { User, UserInput } from '@src/types/users.type'
import mongoose from 'mongoose'

export const createRandomUser = (): User => ({
  _id: new mongoose.Types.ObjectId().toString(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: faker.date.future().toISOString(),
})

export const createRandomUserInput = (): UserInput => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const mockSuccessUserInput = {
  email: 'tester@tester.com',
  password: 'abc123!@#',
}

export const createRandomUserList = (length: number) => Array.from({ length }, () => createRandomUser())
