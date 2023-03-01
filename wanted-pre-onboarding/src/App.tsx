import React, { useState } from "react";
import TopNavigator from "./component/navigator";
import Sidebar from "./component/sidebar";
import LoginPage from "./component/Login";
import "./styles/container.css";

interface Page {
  title: string;
  path: string;
  type: string;
}

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState("1");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pages, setPages] = useState<Page[]>([
    { title: "A", path: "1", type: "public" },
    { title: "B", path: "2", type: "private" },
    { title: "C", path: "3", type: "public" },
  ]);
  const [pageNum, setPageNum] = useState(3);

  const openModal = () => {
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleSetActivePage = (pagePath: string, pageType: string) => {
    if (!isLoggedIn && pageType === "private") alert("This page is prviate. Please Login.");
    else setActivePage(pagePath);
  };

  const handleAddNewPage = () => {
    const newPagePath = prompt("Enter the path for the new page:");
    if (newPagePath) {
      setPageNum((prevNum) => prevNum + 1);
      setPages([
        ...pages,
        { title: newPagePath, path: pageNum + 1 + "", type: "public" },
      ]);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <TopNavigator isLoggedIn={isLoggedIn} onLogout={handleLogout} openModal={openModal}/>
      <div className="content">
        <div className="side-content">
          <Sidebar
            pages={pages}
            activePage={activePage}
            onSetActivePage={handleSetActivePage}
            onAddNewPage={handleAddNewPage}
          />
        </div>
        <div className="page-content">
          <h1>{activePage}</h1>
          <p>This is {activePage} page!</p>
        </div>
      </div>
        {modalIsOpen && <LoginPage handleLogin={handleLogin} />}
    </div>
  );
};

export default App;
