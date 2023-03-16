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

const UserModel = mongoose.model('User', userSchema)

export default UserModel
