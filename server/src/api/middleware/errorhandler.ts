import { Request, Response, Application, NextFunction } from 'express'
import { StatusCodes } from 'http-status-codes'

export default (app: Application) => {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message })
  })
}
