import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';
import Page from './components/Page';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header title={'Wanted Pre-onboarding course'} />
        <Content>
        <SideBar />
          <Routes>
              <Route path='/:id' element={<Page />} />
          </Routes>
        </Content>
      </BrowserRouter>
    </>
  );
}

export default App;
