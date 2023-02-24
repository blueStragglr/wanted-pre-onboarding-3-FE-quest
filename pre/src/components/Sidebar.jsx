import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.ul`
  width: 20%;
  margin: 0;
  padding: 1rem 0;
  border-right: 1px solid #000;

  li {
    list-style: none;
    margin-bottom: 1rem;
  }

  a {
    display: block;
    padding: 1rem 0;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
`;

const Sidebar = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <li>
        <Link to='/a' style={{ color: id === 'a' && 'blue' }}>
          PageA
        </Link>
      </li>
      <li>
        <Link to='/b' style={{ color: id === 'b' && 'blue' }}>
          PageB
        </Link>
      </li>
      <li>
        <Link to='/c' style={{ color: id === 'c' && 'blue' }}>
          PageC
        </Link>
      </li>
    </Container>
  );
};

export default Sidebar;
