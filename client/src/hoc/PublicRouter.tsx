import { ElementType } from 'react'

import NotAllow from '@/pages/NotAllow'

interface PublicRouterProps {
  Component: ElementType
  restricted: boolean
}

const isLogin = () => false

const PublicRouter = ({ Component, restricted }: PublicRouterProps) => {
  return isLogin() && restricted ? <NotAllow warnMessage="로그인한 유저는 접근할 수 없어요" /> : <Component />
}

export default PublicRouter
