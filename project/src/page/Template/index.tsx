import styled from 'styled-components';
import Header from '../../component/Header';
import SideBar from '../../component/SideBar';
import PageData from '../../PageData';

export default function Template({ contents }: { contents?: JSX.Element }) {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <SideBar menu={PageData} />
        {contents}
      </ContentsWrapper>
    </>
  );
}

const ContentsWrapper = styled.div`
  display: flex;
`;
