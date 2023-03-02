import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colorType } from "../types/colorType";

interface SideBarProps {
  /**
   * SideBar에 추가할 페이지의 배열, 존재하지 않는 페이지의 경우 `"/"`로 route됩니다.
   */
  pages?: Array<string>;
}

/**
 * `pages`를 통해 SideBar에 추가할 페이지를 설정합니다.
 */
export default function SideBar(props: SideBarProps): JSX.Element {
  const { pages } = props;

  return (
    <SideBarStyle>
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? colorType.isActive : "inherit",
          };
        }}
      >
        Page A
      </NavLink>
      {pages?.map((page, idx) => {
        return (
          <NavLink
            key={idx}
            to={`/${page.toLowerCase()}`}
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? colorType.isActive : "inherit",
              };
            }}
          >
            {`Page ${page}`}
          </NavLink>
        );
      })}
    </SideBarStyle>
  );
}

const SideBarStyle = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 2rem;
  border-right: 1px solid ${colorType.layoutBorder};
`;
