import styled from '@emotion/styled';
import Button from "../common/Button";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

/**
 *
 */
const pageList = ['Apage', 'Bpage', 'Cpage', 'Dpage'];

const AsideLeft = () => {
  const navigate = useNavigate('/');
  const emailStorage = localStorage.getItem("email");

  useEffect(()=> {
    navigate('/');
  },[emailStorage]);

  return (
    <AsideLeftStyle>
      {pageList.map((item, idx) => <Button key={idx} title={item}>
      </Button>)}
      {emailStorage && <Button title={'Mypage'}/>}
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
