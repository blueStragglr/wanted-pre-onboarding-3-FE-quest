import styled from 'styled-components';

export default function Header() {
  return (
    <Wrapper>
      <Title>Wanted Pre-onboarding Challenge</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  padding: 0 30px;
  border-bottom: 1px solid #ececec;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
`;
