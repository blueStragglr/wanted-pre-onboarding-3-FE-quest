import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <StSidebar>
      <Link to="/pageA"><button>PageA</button></Link>
      <Link to="/pageB"><button>PageB</button></Link>
      <Link to="/pageC"><button>PageC</button></Link>
    </StSidebar>
  )
}

const StSidebar = styled.div`
  background: whitesmoke;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: top;
  text-align: center;
  /* border-right: 0.8px solid salmon; */
  

  button {
    background: #fff;
    margin: 10px;
    padding: 18px 100px;
    color: royalblue;
    font-size: 18px;
    /* font-weight: bold; */
    cursor: pointer;
    border: 0.8px solid white;
    border-radius: 10px;

  }
  button:hover {
    background: #fff;
    border: 0.8px solid salmon;
  }
`


export default Sidebar;