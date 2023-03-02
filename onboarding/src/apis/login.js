import { baseApiUrl } from '../constants/baseUrl';

export const login = async (userInfo) => {
  const result = await fetch(`${baseApiUrl}/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userInfo),
  });

  if (result.ok && result.status === 200) {
  }
};
