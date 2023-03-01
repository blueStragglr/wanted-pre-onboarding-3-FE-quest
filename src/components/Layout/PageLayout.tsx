import * as S from './styles'

type PageLayoutProps = {children: React.ReactNode}

const PageLayout = ({children}: PageLayoutProps) => {
  return <S.Section>{children}</S.Section>
}

export default PageLayout
