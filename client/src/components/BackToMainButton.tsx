import { useNavigate } from 'react-router-dom'

import { ROUTE } from '@/router/routerInfo'

const BackToMainButton = () => {
  const navigate = useNavigate()
  const handleClickBackToMainButton = () => {
    navigate(ROUTE.HOME)
  }
  return (
    <button onClick={handleClickBackToMainButton}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-12 w-12 hover:stroke-blue-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    </button>
  )
}

export default BackToMainButton
