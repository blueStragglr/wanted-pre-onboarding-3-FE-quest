import React from 'react';
import styled from 'styled-components';

const Sidebar = () => {
  return (
    <StSidebar>
      <div>Page A</div>
      <div>Page B</div>
      <div>Page C</div>
    </StSidebar>
  )
}

const StSidebar = styled.div`
  background: #eee;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  text-align: center;
  div {
    margin: 10px;
    padding: 20px;
    color: royalblue;
    font-size: 22px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 8px;
  }
  div:hover {
    background: #ddd;
  }
`


export default Sidebar;