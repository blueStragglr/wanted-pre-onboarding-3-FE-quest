interface HeaderProps {
  className?: string
}

const Header = ({ className }: HeaderProps) => {
  return (
    <header className={className}>
      <h1 className="font-semibold italic">Wanted Pre-onboarding course</h1>
    </header>
  )
}

export default Header
