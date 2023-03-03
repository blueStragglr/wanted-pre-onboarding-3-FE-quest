import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Head = styled.header`
  width: 100%;
  height: 70px;
  border-bottom: solid 1px gray;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  padding-left: 20px;
  line-height: 70px;
`;

const Header = () => {
  return (
    <Head>
      <Link to='/'>Wanted Pre-onboarding course</Link>
    </Head>
  );
};

export default Header;
