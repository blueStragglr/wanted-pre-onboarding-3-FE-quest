import { userController } from '@src/api/controllers'
import { Router } from 'express'

const route = Router()

export default (app: Router) => {
  app.use('/user', route)

  route.get('/', userController.getUsers)
}
