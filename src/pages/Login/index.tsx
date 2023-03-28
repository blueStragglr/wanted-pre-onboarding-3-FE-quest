import { useState } from 'react';

interface UserInfo {
  name: string;
}

interface User {
  username: string;
  password: string;
  userInfo: UserInfo;
}

const users: User[] = [
  {
    username: 'blue',
    password: '1234',
    userInfo: { name: 'blueJean' },
  },
  {
    username: 'white',
    password: '1234',
    userInfo: { name: 'whiteJean' },
  },
  {
    username: 'black',
    password: '1234',
    userInfo: { name: 'blackJean' },
  },
];

type LoginSuccessMessage = 'SUCCESS';
type LoginFailMessage = 'FAIL';

interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage;
  token: string;
}

const _secret: string = '1234qwer!@#$';

const login = async (username: string, password: string): Promise<LoginResponse | null> => {
  const user: User | undefined = users.find((user: User) => {
    return user.username === username && user.password === password;
  });
  return user
    ? {
        message: 'SUCCESS',
        token: JSON.stringify({ user: user.userInfo, secret: _secret }),
      }
    : null;
};

const getUserInfo = async (token: string): Promise<UserInfo | null> => {
  const parsedToken = JSON.parse(token);
  if (!parsedToken?.secret || parsedToken.secret !== _secret) {
    return null;
  }

  const loggedUser: User | undefined = users.find((user: User) => {
    if (user.userInfo.name === parsedToken.user.name) return user;
  });

  return loggedUser ? loggedUser.userInfo : null;
};

export const Login = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({ name: '' });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const loginRes = await login(
      formData.get('username') as string,
      formData.get('password') as string,
    );

    if (!loginRes) {
      return;
    }

    const userInfo = await getUserInfo(loginRes.token);

    if (!userInfo) {
      return;
    }

    setUserInfo(userInfo);
  };
  return (
    <div>
      <h1>Login with Mock API</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <button type="submit" value="Submit">
          Submit
        </button>
      </form>
      <div>
        <h2>User Info</h2>
        {JSON.stringify(userInfo)}
      </div>
    </div>
  );
};
