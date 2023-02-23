import styled from 'styled-components';

const TextBox = styled.div`
  margin: auto;
  text-align: center;
  font-size: 40px;
  font-family: 'Roboto', sans-serif;
  color: #19769b;
`;

export default function PageA() {
  return <TextBox>This is Page A !</TextBox>;
}
