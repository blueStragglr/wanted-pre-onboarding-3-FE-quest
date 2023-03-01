import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import { Wrapper } from './style'

const Home = () => {
  return (
    <>
    <Wrapper>
      <SideBar />
      <Outlet />
    </Wrapper>
    </>
  )
}

export default Home