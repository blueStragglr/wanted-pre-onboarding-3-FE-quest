import userService from '@src/services/user.service'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allUser = await userService.findAllUser()
    return res.status(StatusCodes.OK).json(allUser)
  } catch (error) {
    next(error)
  }
}
