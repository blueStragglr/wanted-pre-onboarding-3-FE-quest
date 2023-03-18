export type User = {
  _id: string
  email: string
  password: string
  createdAt: string
}

export type UserInput = Pick<User, 'email' | 'password'>
