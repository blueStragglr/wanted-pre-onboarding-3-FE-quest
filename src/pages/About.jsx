import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Page className="page">
      <p>About</p>
    </Page>
  );
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
`;

export default About;
