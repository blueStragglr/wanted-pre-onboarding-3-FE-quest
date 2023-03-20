import authService, { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import userService from '@src/services/user.service'
import { UserInput } from '@src/types/users.type'
import { createToken } from '@src/utils/authorizeUtils'
import { createError } from '@src/utils/responseUtils'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as UserInput
  const { isValid, message } = authService.authValidator({ email, password })

  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).json(createError(message))
  }

  try {
    const targetUser = await userService.findUser({ email })

    if (!targetUser) {
      return res.status(StatusCodes.BAD_REQUEST).json(createError(USER_VALIDATION_ERRORS.USER_NOT_FOUND))
    }

    const { email: _email, _id, password: _password } = targetUser
    const isPasswordMatched = await authService.comparePassword(password, _password)

    if (!isPasswordMatched) {
      return res.status(StatusCodes.BAD_REQUEST).json(createError(USER_VALIDATION_ERRORS.PASSWORD_NOT_MATCH))
    }

    return res.status(StatusCodes.OK).json({
      message: USER_SUCCESS.LOGIN,
      token: createToken({ email: _email, _id }),
    })
  } catch (error) {
    next(error)
  }
}

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as UserInput
  const { isValid, message } = authService.authValidator({ email, password })
  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).json(createError(message))
  }

  try {
    const existUser = await userService.findUser({ email: email })

    if (existUser) {
      return res.status(StatusCodes.CONFLICT).json(createError(USER_VALIDATION_ERRORS.EXIST_USER))
    }
  } catch (error) {
    next(error)
  }

  try {
    await userService.createUser({ email, password })
    return res.status(StatusCodes.OK).json({
      message: USER_SUCCESS.SIGN_UP,
    })
  } catch (error) {
    next(error)
  }
}
