import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SideBar = ({ selectPage, setSelectPage }) => {
  const pagePicker = (i) => {
    setSelectPage(i);
  };

  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    fetch("/data/pageList.json")
      .then((result) => result.json())
      .then((data) => setPageList(data[0].page));
  }, []);

  return (
    <>
      {pageList.length > 0 && (
        <SideBarWrapper>
          {pageList.map((page, i) => {
            const isActive = selectPage === i;

            return (
              <PageList key={i}>
                <span
                  key={i}
                  onClick={() => pagePicker(i)}
                  style={{
                    color: isActive ? "lightskyblue" : "black",
                  }}
                >
                  {page.pageNum}
                </span>
              </PageList>
            );
          })}
        </SideBarWrapper>
      )}
    </>
  );
};

export default SideBar;

const SideBarWrapper = styled.div`
  width: 300px;
  height: 100vh;
  border-right: 1px solid lightgray;
  flex-direction: column;
`;

const PageList = styled.div`
  font-size: 22px;
  font-weight: bold;
  padding-left: 20px;
  display: flex;

  span {
    margin: 30px 0 30px 10%;
    cursor: pointer;
    color: lightskyblue;
  }
`;
