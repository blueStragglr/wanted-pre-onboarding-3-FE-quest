import SideBar from '../../components/SideBar'
import Detail from '../Detail'
import { Wrapper } from './style'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
    <Header />
    <Wrapper>
      <SideBar />
      <Detail />
    </Wrapper>
    </>
  )
}

export default Home