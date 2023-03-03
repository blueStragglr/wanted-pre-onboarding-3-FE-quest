import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface Header {
  children?: string;
}

const H1 = styled.h1`
  margin: 10px 0 0 0;
  padding: 10px;
  width: 100%;
  font-size: 20px;
  border-bottom-width: 1px;
  border-color: #ddd;
  border-bottom: 1px solid gray;
`;

const StyledLink = styled(Link)`
  padding-left: 10px;
  color: #181818;

  &:hover {
    color: gray;
  }
`;

export default function Header({ children, ...props }: Header) {
  return (
    <H1 {...props}>
      <StyledLink to={'/'}>{children}</StyledLink>
    </H1>
  );
}
