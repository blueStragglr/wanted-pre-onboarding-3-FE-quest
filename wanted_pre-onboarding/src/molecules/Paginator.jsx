import React from "react";
import styled from "styled-components";

const PagiBox = styled.div`
  border: 4px solid rgba(240, 229, 229, 1);
  padding: 25px;
  min-height: 80vh;
  min-width: 15vw;
`;

export default function Paginator() {
  return <PagiBox className="border-2 border-solid border-indigo-600">Paginator</PagiBox>;
}
