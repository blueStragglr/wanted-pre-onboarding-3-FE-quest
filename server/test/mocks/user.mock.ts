import { faker } from '@faker-js/faker/locale/ko'
import { User, UserInput } from '@src/types/users.type'

export const createRandomUser = (): User => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
  createdAt: faker.date.future().toISOString(),
})

export const createRandomUserInput = (): UserInput => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
})

export const createRandomUserList = (length: number) => Array.from({ length }, () => createRandomUser())
