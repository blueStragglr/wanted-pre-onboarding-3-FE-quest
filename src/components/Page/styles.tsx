import styled from 'styled-components'

export const LoginContainer = styled.form`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-bottom: 10px;
    font-size: var(--default-text-size);
  }

  button {
    background-color: transparent;
    border: 1px solid var(--dark-gray-2);
    border-radius: 2px;
    cursor: pointer;
    font-size: var(--small-text-size);

    :hover {
      background-color: aliceblue;
    }
  }
`

export const InputContainer = styled.section`
  margin: 7px 0;

  font-size: var(--small-text-size);
  text-align: center;

  > input {
    margin-top: 5px;
    border: 1px solid var(--dark-gray-2);
    border-radius: 2px;
    padding: 3px 5px;

    font-size: var(--small-text-size);
  }
`
