import { Routes, Route } from 'react-router-dom'
import { Main, Signin } from './pages';
import { Header, Content, Nav } from "./components"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Main/> }>
          <Route path="/" element={ <Content/> }/>
          <Route path="/A" element={ <Content text={'A'}/> }/>
          <Route path="/B" element={ <Content text={'B'}/> }/>
          <Route path="/C" element={ <Content text={'C'}/> }/>
        </Route>
        <Route path="/signin" element={ <Signin/> } />
        <Route path="/*" element={ <div>404</div> } />
      </Routes>
    </>
  );
}

export default App;
