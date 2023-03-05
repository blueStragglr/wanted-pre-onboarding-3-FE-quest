import { Outlet } from 'react-router-dom'

import HistoryBackButton from '@/components/HistoryBackButton'

const LayoutFullPage = () => {
  return (
    <main>
      <HistoryBackButton />
      <Outlet />
    </main>
  )
}

export default LayoutFullPage
