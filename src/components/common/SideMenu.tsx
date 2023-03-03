import React from 'react'
import { FormattedMessage } from 'react-intl'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import Menus from '@/constants/Menus'

const S = {
  SideMenu: styled.ul`
    margin: 0;
    padding: 0;
    width: 240px;
    height: 100%;
    list-style: none;
    box-sizing: border-box;
    border-right: 1px solid #d8d8d8;
  `,

  Item: styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 16px;
    font-size: 20px;
    font-weight: 500;
    box-sizing: border-box;
  `,
}
const SideMenu = () => {
  const menus = [...Menus]
  return (
    <S.SideMenu>
      {menus.map((menu) => {
        return (
          <S.Item>
            <NavLink to={menu.to}>
              <FormattedMessage id={`page.${menu.pageName}.title` as any} />
            </NavLink>
          </S.Item>
        )
      })}
    </S.SideMenu>
  )
}

export default SideMenu
