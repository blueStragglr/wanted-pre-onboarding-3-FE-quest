import './App.css';
import DrawNav from './layout/DrawNav';
import Header from './layout/Header';

function App() {
  return (
    <div className="App font-sans flex flex-col w-full h-screen">
      <Header />
      <DrawNav />
    </div>
  );
}

export default App;
