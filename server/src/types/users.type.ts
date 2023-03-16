export interface User {
  email: string
  password: string
  createdAt: string
}

export type UserInput = Pick<User, 'email' | 'password'>
