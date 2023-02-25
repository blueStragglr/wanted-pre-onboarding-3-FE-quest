import styled from "styled-components";

export const SideBarLayout = styled.div`
  width: 200px;
  height: calc(100vh - 81px);
  border-right: 1px solid #959595;
`;

export const PageList = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  width: 100px;
  display: flex;
  flex-direction: column;
`;

export const Page = styled.div`
  font-size: 22px;
  margin-bottom: 30px;
  cursor: pointer;

  &:hover {
    color: blue;
  }

  &:active {
    color: blue;
  }
`;
