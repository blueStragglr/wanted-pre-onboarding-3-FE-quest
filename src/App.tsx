import { Toast } from './components/auth/styles';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Toast />
    </>
  );
}

export default App;
