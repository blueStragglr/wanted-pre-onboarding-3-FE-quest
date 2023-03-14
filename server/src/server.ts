import app from '@src/app'
import config from '@src/config'
import loaders from '@src/loaders'
import { Application } from 'express'

const PORT = config.SERVER_PORT

async function startServer(app: Application) {
  await loaders(app)

  app
    .listen(PORT, () => {
      console.log(`✅  Server listening on port: ${PORT}`)
    })
    .on('error', err => {
      console.error(err)
      process.exit(1)
    })

  return app
}

void startServer(app)
