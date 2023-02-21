import styled from '@emotion/styled';
import Button from "../common/Button";

/**
 *
 */
const pageList = ['Apage', 'Bpage', 'Cpage', 'Dpage'];

const AsideLeft = () => {

  return (
    <AsideLeftStyle>
      {pageList.map((item, idx) => <Button key={idx} title={item}/>)}
    </AsideLeftStyle>
  );
};

const AsideLeftStyle = styled.div`
  width: 200px;
  padding: 30px 20px 0 20px;
  background-color: dimgray;
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
`;


export default AsideLeft;
