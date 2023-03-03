import styled from 'styled-components';

interface page {
  children?: string;
}

const Page = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 14px;
  color: skyblue;
`;

export default function Main({ children, ...props }: page) {
  return <Page {...props}>This is Main!</Page>;
}
