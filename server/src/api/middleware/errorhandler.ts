import { createError } from '@src/utils/responseUtils'
import { Request, Response, Application } from 'express'
import { StatusCodes } from 'http-status-codes'

export default (app: Application) => {
  app.use((error: Error, req: Request, res: Response) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(createError(error.message))
  })
}
