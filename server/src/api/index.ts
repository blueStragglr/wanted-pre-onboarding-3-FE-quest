import auth from '@src/api/routes/auth.route'
import user from '@src/api/routes/user.route'
import { Router } from 'express'

export default () => {
  const router = Router()
  auth(router)
  user(router)
  return router
}
