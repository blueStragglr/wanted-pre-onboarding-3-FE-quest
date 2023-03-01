import React from 'react';
import { useNavigate, useRouteError } from 'react-router';
import { USER_TOKEN_KEY } from 'constants';
import { PATH_ROUTE } from 'constants';

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const userToken = localStorage.getItem(USER_TOKEN_KEY);
  return (
    <div>
      <h2>{error.status}</h2>
      <h4>{error.statusText || error.message}</h4>
      <h5>에러가 발생했어요!</h5>
      {userToken ? (
        <button onClick={() => navigate(PATH_ROUTE.root)}>할 일 보러 가기</button>
      ) : (
        <button onClick={() => navigate(PATH_ROUTE.login)}>로그인하러 가기</button>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로 가기</button>
    </div>
  );
};

export default Error;
