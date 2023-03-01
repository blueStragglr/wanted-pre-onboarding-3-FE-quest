import { ReactNode } from 'react';
import styled from 'styled-components';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import PageData from '../../PageData';

export default function Template({ children }: { children?: ReactNode }) {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <SideBar menu={PageData} />
        {children}
      </ContentsWrapper>
    </>
  );
}

const ContentsWrapper = styled.div`
  display: flex;
`;
