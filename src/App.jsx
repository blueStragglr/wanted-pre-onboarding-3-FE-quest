import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default App;
