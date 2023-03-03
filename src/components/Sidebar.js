import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <StSidebar>
      <div><Link to="/pageA">PageA</Link></div>
      <div><Link to="/pageB">PageB</Link></div>
      <div><Link to="/pageC">PageC</Link></div>
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