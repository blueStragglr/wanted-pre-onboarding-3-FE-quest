import './App.css';
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Contents from './Layout/Contents';

function App() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Contents />
      </div>
    </div>

  )
}

export default App;
