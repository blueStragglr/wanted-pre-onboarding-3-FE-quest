import { authController } from '@src/api/controllers'
import { Router } from 'express'

const route = Router()

export default (app: Router) => {
  app.use('/auth', route)

  route.get('/login', authController.login)
  route.post('/signup', authController.signUp)
}
