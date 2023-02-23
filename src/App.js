import './App.css';
import Aside from './components/Aside';
import Page from './components/Page';

function App() {
  const pageList = [
    { page: 'Page A', id: 'a', needLogin: false },
    { page: 'Page B', id: 'b', needLogin: true },
    { page: 'Page C', id: 'c', needLogin: false },
  ];
  return (
    <div className='app'>
      <Aside pageList={pageList} />
      <Page pageList={pageList} />
    </div>
  );
}

export default App;
