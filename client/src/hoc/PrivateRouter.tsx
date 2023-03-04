import { ElementType } from 'react'

import NotAllow from '@/pages/NotAllow'

interface PrivateRouterProps {
  Component: ElementType
}

const isLogin = () => false

const PrivateRouter = ({ Component }: PrivateRouterProps) => {
  return isLogin() ? <Component /> : <NotAllow warnMessage="로그인한 유저만 접근할 수 있어요." />
}

export default PrivateRouter
