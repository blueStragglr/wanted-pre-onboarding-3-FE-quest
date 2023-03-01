import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #006888;
  font-size: 50px;
`;

const Home = () => {
  return (
    <Text>
      This is Home!
    </Text>
  );
};

export default Home;