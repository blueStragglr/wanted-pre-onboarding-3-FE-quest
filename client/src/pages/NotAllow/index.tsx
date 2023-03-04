interface NotAllowProps {
  warnMessage: string
}
const NotAllow = ({ warnMessage }: NotAllowProps) => {
  return (
    <div>
      <h2>{warnMessage}</h2>
    </div>
  )
}

export default NotAllow
