import { ElementType } from 'react'

import NotAllow from '@/pages/NotAllow'
import { ROUTE } from '@/router/routerInfo'
import authService from '@/service/auth.service'

interface PrivateRouterProps {
  Component: ElementType
}

const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  const isLogin = authService.isLogin()
  return isLogin ? (
    <Component />
  ) : (
    <NotAllow
      warnMessage="로그인한 유저만 접근할 수 있어요."
      fallBackUrl={ROUTE.LOGIN}
      fallbackMessage="로그인 페이지로 이동"
    />
  )
}

export default PrivateRouter
