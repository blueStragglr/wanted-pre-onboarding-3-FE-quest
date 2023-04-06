import { Outlet } from 'react-router-dom'

import BackToMainButton from '@/components/BackToMainButton'

const LayoutFullPage = () => {
  return (
    <main className="h-screen p-10">
      <BackToMainButton />
      <Outlet />
    </main>
  )
}

export default LayoutFullPage
