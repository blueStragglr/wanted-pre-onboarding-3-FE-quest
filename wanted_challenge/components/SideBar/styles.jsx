import styled from 'styled-components'

export const SideNav = styled.nav`
  display: flex;
  width: 200px;
  height: calc(100% - 100px);
  border-right: 1px solid #000;

  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
  }

  li {
    padding: 5px 15px;
    font-weight: 700;

    & + li {
      margin-top: 15px;
    }
    
    a.active {
      color: tomato;
    }
  }
`
