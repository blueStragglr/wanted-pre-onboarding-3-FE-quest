import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import Frame from './components/Frame';

function App() {
  console.log('Rendering App component');
  return (
    <div className="App">
      <BrowserRouter>
      <Link to="/learn">Learn React</Link>
      hello world
      <Frame/>
      </BrowserRouter>
    </div>
  );
}

export default App;
