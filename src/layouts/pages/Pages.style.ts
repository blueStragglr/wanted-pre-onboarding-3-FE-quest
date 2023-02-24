import styled from '@emotion/styled';

export const ContentContainer = styled.div`
  position: fixed;
  left: 10vw;
  width: 100%;
  padding-top: 40vh;
  text-align: center;
  font-size: 40px;
  color: #639ec3;

  @media (max-width: 1024px) {
    font-size: 24px;
    min-width: 900px;
  }
`;
