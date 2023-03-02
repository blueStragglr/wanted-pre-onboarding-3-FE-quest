import styled from 'styled-components'
import colors from '../../../styles/constants/colors'

export const sidebarContainer = styled.nav`
  min-width: 100px;
  height: 100%;
  display: flex;
  padding: 20px 0 0 0;
  border-right: 1px solid ${colors.BLACK};
  flex-direction: column;
  align-items: center;
  font-size: 20px;

  a {
    margin-bottom: 20px;
    color: ${colors.BLACK};
  }
  .active {
    color: ${colors.DEEP_BLUE};
  }
`
