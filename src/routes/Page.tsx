import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState , useRef, useCallback , useEffect} from "react";
import { UserInfo } from "../types/user";
import { getCurrentUserInfo } from "../Api/login";
import { isLogined } from "../Recoil/atoms";
import { useRecoilValue } from "recoil";


const MainContainer = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  line-height : 25px;
`;

interface ILocation {
  state: {
    Auth: Boolean;
  };
}

function Page() {
  const { PageId } = useParams();
  const { state } = useLocation() as ILocation;
  const islogin = useRecoilValue(isLogined);

  const [user, setUserInfo] = useState<UserInfo | null>(null)
  const isDataFetched = useRef(false)

  const getUserInfo = useCallback (async () => {

    const userInfo = await getCurrentUserInfo()
    setUserInfo(userInfo)

    isDataFetched.current = true
  }, [])

  useEffect(() => {
    if (isDataFetched.current) return
    getUserInfo()
  }, [])

  return (
    <>
      {!state.Auth  ? (
        <MainContainer>I'm {PageId}</MainContainer>
      ) : user?.name && islogin ? "로그인이 되어있군요!": (
        <MainContainer>로그인이 필요합니다. <br />
        Login - localstorage login 으로 이동해서 로그인을 해주세요. 
        </MainContainer>
      )}
    </>
  );
}

export default Page;
