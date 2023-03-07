import { Button, Result } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage: FC = () => {
  const navigate = useNavigate()
  return (
    <Result
      status="404"
      title="404"
      subTitle={'페이지를 찾을 수 없습니다.'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          {'홈으로 돌아가기'}
        </Button>
      }
    />
  )
}

export default NotFoundPage
