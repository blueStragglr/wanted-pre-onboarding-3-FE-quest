import { ElementType } from 'react'

import NotAllow from '@/pages/NotAllow'
import authService from '@/service/auth.service'

interface PrivateRouterProps {
  Component: ElementType
}

const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  const isLogin = authService.isLogin()
  return isLogin ? <Component /> : <NotAllow warnMessage="로그인한 유저만 접근할 수 있어요." />
}

export default PrivateRouter
