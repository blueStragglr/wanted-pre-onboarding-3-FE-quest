import styled from 'styled-components';

export default function Header() {
  return (
    <S_Header>
      <h1>Wanted Pre-onboading course</h1>
    </S_Header>
  );
}

const S_Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 300px;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 1.5rem;
  border-bottom: 1px solid black;
  font-size: 2rem;
  font-weight: bold;
  font-style: italic;
  background-color: white;
`;
