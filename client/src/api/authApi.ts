import publicApi from '@/api/instance'
import { API } from '@/constants/api.constant'

const authApi = {
  signUp(email: string, password: string) {
    return publicApi({
      url: API.AUTH.SIGNUP,
      method: 'POST',
      data: {
        email,
        password,
      },
    })
  },
  login(email: string, password: string) {
    return publicApi({
      url: API.AUTH.LOGIN,
      method: 'POST',
      data: {
        email,
        password,
      },
    })
  },
}

export default authApi
