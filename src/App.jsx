// import reactLogo from './assets/react.svg'
// import './App.css'
// import Home from './pages/Home'
import Header from './Components/Header'
import { Outlet } from "react-router-dom";
import SideBar from './Components/SideBar';
import styled from 'styled-components';
import { Reset } from 'styled-reset';

function App() {
  return (
    <AppBox className="App">
      <Reset />
      <Header />      
      <SideBar />
      <div style={outletStyle}>
        <Outlet />
      </div>
    </AppBox>
  )
}

export default App

const AppBox = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: 120px auto;
  height: 100vh;
`

const outletStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: 50,
  fontSize: 30
}