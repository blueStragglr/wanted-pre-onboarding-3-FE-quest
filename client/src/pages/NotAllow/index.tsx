import Button from '@/components/Button'
import { useRouter } from '@/hooks/useRouter'

interface NotAllowProps {
  warnMessage: string
  fallBackUrl: string
  fallbackMessage: string
}
const NotAllow = ({ warnMessage, fallBackUrl, fallbackMessage }: NotAllowProps) => {
  const { routeTo } = useRouter()
  const handleClickFallbackButton = () => {
    routeTo(fallBackUrl)
  }

  return (
    <div className="absolute top-1/2 left-1/2 flex w-10 min-w-max -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-lg bg-white p-6 shadow-md">
      <h2>{warnMessage}</h2>
      <Button text={fallbackMessage} onClick={handleClickFallbackButton} />
    </div>
  )
}

export default NotAllow
