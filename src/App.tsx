import { Outlet } from "react-router-dom"
import styled from "@emotion/styled"
import Header from "./components/header"
import Navbar from "./components/nav"

const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </Section>
    </>
  )
}

export default App

const Section = styled.div`
  display: flex;
  min-height: calc(100vh - 40px);

  main {
    flex: 1;
  }
`
