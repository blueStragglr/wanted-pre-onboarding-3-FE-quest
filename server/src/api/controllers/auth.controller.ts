import UserModel, { IUser } from '@src/model/User'
import { NextFunction, Request, Response } from 'express'

export const login = () => {
  console.log('login')
}

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const body = req.body as IUser
    const newUser = await UserModel.create(body)
    res.status(201).json(newUser)
  } catch (error) {
    next(error)
  }
}
