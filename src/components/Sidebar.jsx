import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

function Sidebar(pageList) {
  const location = useLocation();
  return (
    <>
      <Section>
        <Links>
          {pageList.pageList.map((page) => {
            const currentPage = location.pathname.split('/')[1];
            const active = page === currentPage || false;
            return (
              <Link to={page}>
                <Page active={active}>{page}</Page>
              </Link>
            );
          })}
        </Links>
      </Section>
    </>
  );
}

const Section = styled.aside`
  width: 20rem;
  height: calc(100vh - 5rem);
  position: absolute;
`;
const Links = styled.div`
  height: 100%;
  width: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid;
`;
const Page = styled.ul`
  border: none;
  background-color: ${(props) => (props.active ? 'pink' : '#fff')};
  width: 20rem;
  height: 5rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;
export default Sidebar;
