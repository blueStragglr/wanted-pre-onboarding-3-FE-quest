import authService from '@/service/auth.service'

const Main = () => {
  const handleClickLogout = () => {
    authService.logout()
    alert('bye')
    window.location.reload()
  }
  const isLogin = authService.isLogin()

  return (
    <div>
      <h1>Main</h1>
      {isLogin && (
        <button
          className="h-10 w-32 rounded-md bg-blue-600 text-white hover:bg-blue-200 hover:text-blue-600 disabled:cursor-not-allowed disabled:opacity-30"
          onClick={handleClickLogout}
        >
          로그아웃
        </button>
      )}
    </div>
  )
}

export default Main
