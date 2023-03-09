import styled from "styled-components";

export const Nav = () => {
  const pages = ["page-a", "page-b", "page-c"];
  return (
    <Wrapper>
      {pages.map((page, idx) => {
        return (
          <li key={idx}>
            <a href={`/${page}`}>{page}</a>
          </li>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: block;
  list-style: none;
  padding: 0;
  margin: 0;
  width: 20%;
  height: 100%;
  color: black;
  > li {
    padding: 15px;
    > a {
      color: black;
      text-decoration: none;
      :hover {
        color: blue;
      }
    }
  }
`;
