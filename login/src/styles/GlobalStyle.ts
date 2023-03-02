import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');

  * { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
ul {
  list-style: none;
}


button {
  background: none;
  border: none;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit
}

input {
  outline: none;
  height: fit-content;
  font-size: 16px;
  
  ::placeholder {
    font-size: 16px;

  }
  
  :disabled {
    font-size: inherit;

  }
}

select {
background-color: #fff;
outline: none;
}

textarea {
  outline: none;
  font-size: 16px;
}

  `;

export default GlobalStyle;
