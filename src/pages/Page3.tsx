import React from "react";
import { useSelector } from "react-redux";
import { PageLayout } from "../components/layout/PageLayout";
import { RootState } from "../store/store";

type Props = {};

const Page3 = (props: Props) => {
  const loginStatus = useSelector(
    (state: RootState) => state.login.loginStatus
  );
  const id = useSelector((state: RootState) => state.login.id);
  const password = useSelector((state: RootState) => state.login.password);
  return (
    <PageLayout className="page">
      {/* {loginStatus ? ( */}
      <>
        <p>
          This is Page3
          <br />
          id: {id}
          <br />
          password: {password}
        </p>
      </>
      {/* ) : ( */}
      {/* <p>로그인을 해야만 볼 수 있는 페이지 입니다.</p> */}
      {/* )} */}
    </PageLayout>
  );
};

export default Page3;
