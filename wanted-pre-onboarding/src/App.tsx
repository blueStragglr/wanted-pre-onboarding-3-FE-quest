import React, { useState } from 'react';
import TopNavigator from './component/navigator';
import Sidebar from './component/sidebar';
import './styles/container.css'

interface Page {
  title: string;
  path: string;
}

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('/home');
  const [pages, setPages] = useState<Page[]>([
    { title: 'Home', path: '/home' },
    { title: 'About', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ]);

  const handleSetActivePage = (pagePath: string) => {
    setActivePage(pagePath);
  };

  const handleAddNewPage = () => {
    const newPagePath = prompt('Enter the path for the new page:');
    if (newPagePath) {
      setPages([...pages, { title: newPagePath, path: newPagePath }]);
    }
  };

  return (
    <div className="App">
      <TopNavigator />
      <div className="content">
        <div className="side-content">
          <Sidebar pages={pages} activePage={activePage} onSetActivePage={handleSetActivePage} onAddNewPage={handleAddNewPage} />
        </div>
        <div className="page-content">
          <h1>{activePage}</h1>
          <p>Welcome to the {activePage} page!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
