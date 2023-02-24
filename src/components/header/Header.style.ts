import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid gray;
`;

export const HeaderTitle = styled.div`
  display: inline-block;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 20px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
`;
