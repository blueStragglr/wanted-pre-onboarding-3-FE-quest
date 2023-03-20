import 'dotenv/config'
import routes from '@src/api'
import errorhandler from '@src/api/middleware/errorhandler'
import config from '@src/config'
import { createError } from '@src/utils/responseUtils'
import express from 'express'

export const createServer = () => {
  const app: express.Application = express()
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  app.use(config.API.PREFIX, routes())
  app.use((req, res, next) => {
    next(createError(404))
  })
  errorhandler(app)

  return app
}

const app = createServer()

export default app
