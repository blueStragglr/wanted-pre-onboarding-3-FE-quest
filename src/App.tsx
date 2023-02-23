import { useSelector } from 'react-redux';
import Home from './Home';
import Login from './Login';

function App() {
  const isLogin = useSelector((state: any) => state.login.isLogin);

  return <>{isLogin ? <Home /> : <Login />}</>;
}

export default App;
