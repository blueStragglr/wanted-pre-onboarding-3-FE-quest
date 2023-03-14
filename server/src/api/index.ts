import auth from '@src/api/routes/auth'
import user from '@src/api/routes/user'
import { Router } from 'express'

export default () => {
  const router = Router()
  auth(router)
  user(router)
  return router
}
