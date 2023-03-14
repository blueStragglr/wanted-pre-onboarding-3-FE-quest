import 'dotenv/config'
import routes from '@src/api'
import errorhandler from '@src/api/middleware/errorhandler'
import config from '@src/config'
import express from 'express'

const createServer = () => {
  const app: express.Application = express()
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())

  app.use(config.API.PREFIX, routes())
  errorhandler(app)

  return app
}

const app = createServer()

export default app
