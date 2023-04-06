import { AxiosError, AxiosResponse } from 'axios'

import { HttpError } from '@/api/customError'

interface CustomServerError {
  data: {
    details?: string
  }
}

export const onResponse = (response: AxiosResponse) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = response.data
  // const data = response.data as Record<string, unknown> interceptors.response.use 에러 발생

  const { headers } = response
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return { ...data, headers }
}

export const onResponseError = (error: AxiosError) => {
  // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
  // 응답 오류가 있는 작업 수행
  console.error(error)
  if (error.response) {
    // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.

    const { data } = error.response as CustomServerError

    const {
      response: { status },
    } = error

    // 서버에서 보낸 custom 에러 메세지가 있을 경우 해당 메세지를 에러 메세지로 전달
    if (data && data.details !== undefined) {
      return Promise.reject(new HttpError(data.details, status))
    }

    // 서버에서 보낸 custom 에러 메세지가 없을 경우 기본 메세지를 에러 메세지로 전달
    return Promise.reject(new HttpError(error.message, status))
  }
  if (error.request) {
    // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    // Node.js의 http.ClientRequest 인스턴스입니다.
    console.log(error.request)
  } else {
    // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    console.log('Error', error.message)
  }

  return Promise.reject(new Error('요청 도중 에러 발생'))
}
