import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageLayout } from "../components/layout/PageLayout";

type Props = {};

const NotFound = (props: Props) => {
  const navigate = useNavigate();
  return (
    <PageLayout>
      <p>Not Found Page</p>
      <HomeButton onClick={() => navigate("/", { replace: true })}>
        Go Home
      </HomeButton>
    </PageLayout>
  );
};

const HomeButton = styled.button`
  display: inline-block;
  background-color: white;
  outline: none;
  border: 1px solid lightgray;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 50px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: lightgray;
  }
`;

export default NotFound;
