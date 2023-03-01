import { Routes, Route } from 'react-router-dom'
import { Main, Signin } from './pages';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Main/> } />
        <Route path="/signin" element={ <Signin/> } />
      </Routes>
    </>
  );
}

export default App;
