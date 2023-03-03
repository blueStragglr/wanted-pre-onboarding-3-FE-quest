import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className='pl-40 pt-16 w-full h-screen flex justify-center items-center text-3xl'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
