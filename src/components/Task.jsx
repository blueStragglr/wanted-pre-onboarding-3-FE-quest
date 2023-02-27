import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  position: absolute;
  top: 10%;
  left: 10%;
  color: #006888;
  font-size: 50px;
`;

const Task = () => {
  return (
    <Text>
      This is Task!
    </Text>
  );
};

export default Task;