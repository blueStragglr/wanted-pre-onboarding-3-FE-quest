import React from "react";
import { useState, useEffect } from "react";
import "./Main.css";

const Main = ({ selectPage }) => {
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    fetch("/data/pageList.json")
      .then((result) => result.json())
      .then((data) => setPageList(data[0].page));
  }, []);

  return (
    <>
      {pageList.length > 0 && (
        <div className="mainContainer">
          <span className="mainContent">{pageList[selectPage].Content}</span>
        </div>
      )}
    </>
  );
};

export default Main;
