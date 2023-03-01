import React from "react";
import styled from "styled-components";

export default function InputForm({ type, value, setValue, autoComplete }) {
  return (
    <Container>
      {type}
      <input type={type} value={value} onChange={(e) => setValue(e.target.value)} autoComplete={autoComplete} />
    </Container>
  );
}

const Container = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
