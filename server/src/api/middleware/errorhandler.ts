import { Request, Response, Application, NextFunction } from 'express'

export default (app: Application) => {
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({ message: error.message })
  })
}
