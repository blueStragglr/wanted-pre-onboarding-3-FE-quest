import mongoose, { Schema } from 'mongoose'

export interface IUser {
  id: string
  nickname: string
}

const userSchema = new Schema<IUser>({
  id: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
})

const UserModel = mongoose.model('User', userSchema)

export default UserModel
