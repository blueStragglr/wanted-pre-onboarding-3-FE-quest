import { useEffect } from "react";

import styled from "styled-components";

import { AUTH_KEY } from "@/constants/constant";
import { useAuthContext } from "@/Context/AuthContextProvider";

const Logout = () => {
  const { setState, loginService } = useAuthContext();

  useEffect(() => {
    loginService.delete(AUTH_KEY);
    setTimeout(() => setState({ id: "", isLogin: false }), 3000);
  }, []);

  return <Container>🥲 멀리 안나가요. 잘가요.</Container>;
};

export default Logout;

const Container = styled.div`
  width: 100%;
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-items: center;
  font-size: 3rem;
  font-weight: bold;
`;
