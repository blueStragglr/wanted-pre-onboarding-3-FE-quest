import { Link } from 'react-router-dom'

import { ROUTE } from '@/constants/route.constant'

const GlobalNavigation = () => {
  return (
    <div>
      <ul>
        <Link to={ROUTE.HOME}>HOME</Link>
        <Link to={ROUTE.A}>A</Link>
        <Link to={ROUTE.B}>B</Link>
        <Link to={ROUTE.SIGN_UP}>SIGN_UP</Link>
        <Link to={ROUTE.LOGIN}>LOGIN</Link>
      </ul>
    </div>
  )
}

export default GlobalNavigation
