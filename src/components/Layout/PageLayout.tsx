import styled from 'styled-components'

const Section = styled.section`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-blue);
  letter-spacing: var(--spacing-1);
`

type PageLayoutProps = {children: React.ReactNode}

const PageLayout = ({children}: PageLayoutProps) => {
  return <Section>{children}</Section>
}

export default PageLayout
