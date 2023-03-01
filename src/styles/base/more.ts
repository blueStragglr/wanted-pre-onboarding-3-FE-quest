import { css } from 'styled-components'

const more = css`
  /* stylelint-disable value-no-vendor-prefix */

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    letter-spacing: -0.05em;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::before,
    &::after {
      box-sizing: border-box;
    }

    &::-webkit-scrollbar {
      display: none;
    }
  }

  img {
    border: 0;
  }

  a {
    text-decoration: none;
  }

  select,
  input,
  textarea {
    font-size: 16px;
  }

  input,
  button {
    appearance: none;
  }

  input::-webkit-contacts-auto-fill-button {
    position: absolute;
    right: 0;
    display: none !important;
    pointer-events: none;
    visibility: hidden;
  }

  input {
    background-color: transparent;
    background-image: none !important;
    border: 0;
  }

  button {
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 0;

    &:disabled {
      cursor: not-allowed;
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  input:is([type='button'], [type='submit'], [type='reset']),
  input[type='file']::file-selector-button,
  button {
    color: initial;
  }
`
export default more
