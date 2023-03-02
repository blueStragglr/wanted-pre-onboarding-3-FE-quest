import React from "react";
import styled from "styled-components";

const MyPage = () => {
  return <Page className="page">MyPage</Page>;
};

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
`;

export default MyPage;
