import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #006888;
  font-size: 50px;
`;

const About = () => {

  return (
    <Text>
      This is About!
    </Text>
  );
};

export default About;