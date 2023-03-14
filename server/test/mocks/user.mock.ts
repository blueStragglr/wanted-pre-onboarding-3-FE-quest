import { faker } from '@faker-js/faker/locale/ko'

export const createRandomUserInfo = () => ({
  id: faker.datatype.uuid(),
  nickname: faker.name.fullName(),
})

export const createRandomUserList = (length: number) => Array.from({ length }, () => createRandomUserInfo())
