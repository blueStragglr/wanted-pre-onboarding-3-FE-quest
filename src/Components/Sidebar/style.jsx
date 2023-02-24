import styled from "styled-components";

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  float: left;
  width: 10rem;
  top: 3.5rem;
  height: calc(100vh - 50px);
  box-sizing: border-box;
  border: solid black 1px;
`;
export const ListBox = styled.div`
  ul {
    padding: 4px 15px;
  }

  li {
    display: flex;
    align-items: center;
    gap: 7px;
    margin: 12px 0;
    font-size: 13px;
    list-style: inside;
    list-style-type: none;
  }
`;
