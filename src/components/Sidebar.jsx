import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <>
      <Section>
        <Links>
          <Link to="/page1">
            <Btn>iOS 챌린지</Btn>
          </Link>
          <Link to="/page2">
            <Btn>프론트 챌린지</Btn>
          </Link>
          <Link to="/page3">
            <Btn>백엔드 챌린지</Btn>
          </Link>
          <Link to="/page4">
            <Btn>디자인 챌린지</Btn>
          </Link>
          <Link to="/page5">
            <Btn>데이터 챌린지</Btn>
          </Link>
        </Links>
      </Section>
    </>
  );
}

const Section = styled.section`
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
const Btn = styled.button`
  border: none;
  background-color: #fff;
  width: 20rem;
  height: 5rem;
  transition: 0.2s;
  font-size: 1.2rem;
  &:hover {
    cursor: pointer;
    background-color: pink;
  }
`;
export default Sidebar;
