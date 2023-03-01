import styled from 'styled-components'

/* Header */
export const HeaderContainer = styled.div`
  width: 100vw;
  height: 10%;
  border-bottom: solid 0.5px var(--dark-gray-1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;

  h1 {
    font-size: var(--small-text-size);
    line-height: var(--small-text-line-height);
    color: var(--black);
    font-weight: bold;
    letter-spacing: var(--spacing-1);
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: 0.8px solid var(--dark-gray-1);
  border-radius: 2px;
  margin-right: 15px;
  cursor: pointer;
  font-size: var(--small-text-size);

  :hover {
    background-color: aliceblue;
  }
`

/* Layout */
export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: row;
  }
`

/* Nav */

export const NavContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-right: solid 0.5px var(--dark-gray-1);

  height: 100vh;

  width: 15%;
  padding: 10px;

  .nav {
    margin: 8px 0;
    font-size: var(--small-text-size);
    color: var(--dark-gray-1);
    text-decoration: none;
  }

  .active {
    color: var(--primary-blue);
  }
`

/* PageLayout */
export const Section = styled.section`
  width: 85%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-blue);
  letter-spacing: var(--spacing-1);
`
