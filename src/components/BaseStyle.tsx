import React from 'react'
import { css, Global } from '@emotion/react'

const createBaseStyles = () => css`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: #edf0f2;
    font-weight: 400;
    font-size: 16px;
    letter-spacing: normal;
  }

  div#root {
    width: 100%;
    height: 100%;
  }

  noscript {
    position: absolute;
    display: block;
    visibility: visible;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    top: 0;
    font-size: 50px;
    text-align: center;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

const BaseStyle = () => {
  return (
    <>
      <Global styles={() => createBaseStyles()} />
    </>
  )
}

export default BaseStyle
