import { Application } from 'express'

import mongooseLoader from './mongoose'

export default async (app: Application) => {
  await mongooseLoader()
  console.log('✌️ DB loaded and connected!')
}
