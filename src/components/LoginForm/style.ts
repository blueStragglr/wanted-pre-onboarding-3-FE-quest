import styled from "styled-components";

export const Form = styled.form`
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
`;

export const InputContainer = styled.div`
    margin: 10px 0;

    input {
        width:80%;
        border: 1px solid #E5E9F5;
        background-color: #F6F7FA;
        padding: 20px;
        margin: 10px 0;
        border-radius: 10px;
    }
}
`;
