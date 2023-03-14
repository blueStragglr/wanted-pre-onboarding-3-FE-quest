import UserModel from '@src/model/User'
import { NextFunction, Request, Response } from 'express'

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUsers = await UserModel.find()
    res.status(200).json(allUsers)
  } catch (error) {
    next(error)
  }
}
