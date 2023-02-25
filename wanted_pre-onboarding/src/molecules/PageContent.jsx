import React from "react";
import styled from "styled-components";

const ContBox = styled.div`
  border: 4px solid rgba(240, 229, 229, 1);
  padding: 25px;
`;

export default function PageContent() {
  return <ContBox className="flex-1 border-2 border-solid border-indigo-600">PageContent</ContBox>;
}
