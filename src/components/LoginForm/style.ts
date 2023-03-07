import styled from '@emotion/styled'

export const InputForm = styled('form')`
  display: flex;
  flex-direction: column;
  width: 420px;
  align-items: center;
  button {
    width: 80px;
    background-color: #1a6dff;
    border: none;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
  }
`

export const InputBox = styled('div')`
  margin: 10px 0;
  input {
    width: 80%;
    border: 1px solid #e5e9f5;
    background-color: #f6f7fa;
    padding: 20px;
    margin: 10px 0;
    border-radius: 10px;
  }
`
