import authService from '@src/services/auth.service'
import { User } from '@src/types/users.type'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
})

userSchema.pre('save', async function (this: User, next) {
  try {
    const hash = await authService.hashPassword(this.password)
    this.password = hash
    next()
  } catch (error) {
    if (error instanceof Error) {
      next(error)
    } else {
      next(new Error())
    }
  }
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
