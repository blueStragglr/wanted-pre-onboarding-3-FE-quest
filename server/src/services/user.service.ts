import UserModel from '@src/model/User'
import { User, UserInput } from '@src/types/users.type'

const createUser = async ({ email, password }: Pick<User, 'email' | 'password'>) => {
  const timestamp = new Date().toISOString()
  const newUser = await UserModel.create({ email, password, createdAt: timestamp })

  return { email: newUser.email }
}

const findUser = async <T extends Partial<UserInput>>(predicate: T) => {
  const existUser = await UserModel.findOne(predicate)
  return existUser
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
