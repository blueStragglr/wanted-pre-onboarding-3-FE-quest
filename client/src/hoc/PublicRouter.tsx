import { ElementType } from 'react'

import NotAllow from '@/pages/NotAllow'
import authService from '@/service/auth.service'

interface PublicRouterProps {
  Component: ElementType
  restricted: boolean
}

const PublicRouter = ({ Component, restricted }: PublicRouterProps) => {
  const isLogin = authService.isLogin()
  return isLogin && restricted ? <NotAllow warnMessage="로그인한 유저는 접근할 수 없어요" /> : <Component />
}

export default PublicRouter
