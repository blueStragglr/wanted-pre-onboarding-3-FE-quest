import { Outlet } from 'react-router-dom'

import GlobalNavigation from '@/components/GlobalNavigation'

const LayoutWithHeader = () => {
  return (
    <div>
      <GlobalNavigation />
      <Outlet />
    </div>
  )
}

export default LayoutWithHeader
