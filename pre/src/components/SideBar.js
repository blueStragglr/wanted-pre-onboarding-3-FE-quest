import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.ul`
  width: 20%;
  height: calc(100vh - 5rem);
  margin: 0;
  padding: 1rem;
  border-right: 1px solid #ddd;
  float: left;

  li {
    list-style: none;
  }

  a {
    display: block;
    padding: 1rem;
    color: inherit;
    text-decoration: none;
  }
`;

const SideBar = () => {
  return (
    <Container>
      <li>
        <Link to='/page-a'>Page A</Link>
      </li>
      <li>
        <Link to='/page-b'>Page B</Link>
      </li>
      <li>
        <Link to='/page-c'>Page C</Link>
      </li>
    </Container>
  );
};

export default SideBar;
