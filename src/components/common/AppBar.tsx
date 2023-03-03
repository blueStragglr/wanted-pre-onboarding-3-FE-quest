import React from 'react'
import { FormattedMessage } from 'react-intl'
import styled from '@emotion/styled'

const S = {
  Header: styled.header`
    width: 100%;
    padding: 16px 12px;
    font-weight: bold;
    font-size: 32px;
    border-bottom: 1px solid #d8d8d8;
  `,
}

const AppBar = () => {
  return (
    <S.Header>
      <FormattedMessage id={'site.title'} />
    </S.Header>
  )
}

export default AppBar
