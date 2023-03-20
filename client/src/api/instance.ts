import axios, { AxiosError, AxiosResponse } from 'axios'

import { ROOT_API_URL } from '@/constants/api.constant'

const publicApi = axios.create({
  baseURL: ROOT_API_URL,
})

publicApi.defaults.timeout = 2500

publicApi.interceptors.response.use(
  (response: AxiosResponse) => {
    // FIXME: response.data 타입에러
    return response
  },
  (error: AxiosError | Error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.error(error) // 디버깅
    return error
  },
)

export default publicApi
