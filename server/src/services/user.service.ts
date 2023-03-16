import UserModel from '@src/model/User'
import { User } from '@src/types/users.type'

const createUser = async ({ email, password }: Pick<User, 'email' | 'password'>) => {
  const timestamp = new Date().toISOString()
  const newUser = await UserModel.create({ email, password, createdAt: timestamp })

  return { email: newUser.email }
}

const findUser = async (predicate: { email: string }) => {
  const existUser = await UserModel.find(predicate)
  return existUser.length !== 0
}

const findAllUser = async () => {
  const existAllUser = await UserModel.find({})
  return existAllUser
}

const userService = {
  createUser,
  findUser,
  findAllUser,
}

export default userService
