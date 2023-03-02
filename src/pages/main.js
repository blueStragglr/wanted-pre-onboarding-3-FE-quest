import { Header, Nav } from "../components"
import styled from 'styled-components';
import { Outlet } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Main = () => {

  return (
    <Container>
      <Header/>
      <Nav/>
      <Outlet/>
    </Container>
  )
}