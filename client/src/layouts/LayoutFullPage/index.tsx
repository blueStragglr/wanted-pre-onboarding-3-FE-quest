import { Outlet } from 'react-router-dom'

import HistoryBackButton from '@/components/HistoryBackButton'

const LayoutFullPage = () => {
  return (
    <main className="h-screen p-10">
      <HistoryBackButton />
      <Outlet />
    </main>
  )
}

export default LayoutFullPage
