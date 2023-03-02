import { baseApiUrl } from '../constants/baseUrl';
import { setIsLogin } from '../utils';

export const login = async (userInfo, onSuccess) => {
  const response = await fetch(`${baseApiUrl}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  if (response.status === 401) {
    alert('로그인에 실패하셨습니다.');
  }

  if (response.status === 200 && response.ok) {
    setIsLogin();
    onSuccess();
  }
};
