import styled from 'styled-components';

export const MainArea = styled.div`
  height: 786px;
  display: flex;
`;

export const AsideArea = styled.ul`
  width: 16vw;
  border-right: 1px solid #9f9f9f;
  padding: 20px 40px;
  li {
    list-style: none;
    margin-bottom: 20px;
    cursor: pointer;
  }
`;

export const ContentArea = styled.div`
  width: 100%;
  align-items: center;
  padding: 20px 0;
  text-align: center;
`;

export const ContentText = styled.span`
  font-size: 28px;
  color: #1d78b6;
`;
