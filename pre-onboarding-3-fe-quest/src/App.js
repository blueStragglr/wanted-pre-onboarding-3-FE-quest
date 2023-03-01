import './App.css';
import {Route, Routes} from 'react-router-dom';
import pageA from './pages/pageA';
import pageB from './pages/pageB';
import pageC from './pages/pageC';
import HorizonLine from './utils/HorizonLine';

function App() {
  return (
    <>
      <h1>wanted Pre-onboarding course</h1>
      <HorizonLine/>
        <Routes>
          <Route path="/pageA" element={pageA}/>
          <Route path="/pageB" element={pageB}/>
          <Route path="/pageC" element={pageC}/>
        </Routes>
    </>
  );
}

export default App;
