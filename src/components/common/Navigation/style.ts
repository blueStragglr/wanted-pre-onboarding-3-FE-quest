import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 150px;
  padding: 20px;
  border-right: 1px solid #dcdcdc;
`
export const Navi = styled(NavLink)`
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  margin: 10px 0;
  box-sizing: border-box;
  transform: 0.3 all;
  &:hover {
    background-color: rgb(111, 104, 181);
    color: #fff;
  }
  &.active {
    background-color: #1a6dff;
    color: #fff;
  }
`
