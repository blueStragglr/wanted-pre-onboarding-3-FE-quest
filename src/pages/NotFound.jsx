import React from "react";
import styled from "styled-components";
import { BiErrorAlt } from "react-icons/bi";

const NotFound = () => {
  return (
    <Page>
      <BiErrorAlt className="icon" />
      <h3>404 NotFound</h3>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100vh;
  padding: 50px;
  box-sizing: border-box;
  background-color: var(--color-point);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  text-align: center;
  color: var(--color-primary);
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  .icon {
    padding-bottom: 20px;
    width: 100%;
  }
`;

export default NotFound;
