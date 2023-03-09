import styled from "styled-components";
import { RouteInfo } from "../route/router";

export const Nav = () => {
  return (
    <Wrapper>
      {RouteInfo.map((info) => {
        return (
          <li key={info.label}>
            <a href={`${info.path}`}>{info.label}</a>
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
