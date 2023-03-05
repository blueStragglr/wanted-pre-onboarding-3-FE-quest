import styled from 'styled-components';

const Head = styled.header`
  width: 100%;
  border-bottom: 1px solid #333;
  padding: 1.6rem;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    font-style: italic;
  }
`

function Header() {
  return (
    <Head>
      <h2>Wanted Pre-onboarding course</h2>
    </Head>
  )
}

export default Header;