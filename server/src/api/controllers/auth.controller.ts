import authService, { USER_SUCCESS, USER_VALIDATION_ERRORS } from '@src/services/auth.service'
import userService from '@src/services/user.service'
import { UserInput } from '@src/types/users.type'
import { createToken } from '@src/utils/authorizeUtils'
import { createError } from '@src/utils/responseUtils'
import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

export const login = () => {
  console.log('login')
}

export const signUp = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body as UserInput
  const { isValid, message } = authService.loginValidator({ email, password })
  if (!isValid) {
    return res.status(StatusCodes.BAD_REQUEST).send(createError(message))
  }

  const existUser = await userService.findUser({ email: email })

  if (existUser) {
    return res.status(StatusCodes.CONFLICT).send(createError(USER_VALIDATION_ERRORS.EXIST_USER))
  }

  try {
    const { email: createdEmail } = await userService.createUser({ email, password })
    return res.status(StatusCodes.OK).json({
      message: USER_SUCCESS.SIGN_UP,
      token: createToken(createdEmail),
    })
  } catch (error) {
    next(error)
  }
}
