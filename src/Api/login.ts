import { BASE_URL } from "./const";
import {
  getAccessTokenFromLocalStorage,
  saveAccessTokenToLocalStorage,
} from "../utils/accessTokenHandler";
import { UserInfo } from "../types/user";
import axios from "axios";

//생 로그인
interface ILoginInfo {
  id: string;
  passWord: string;
}
export const loginLow = (loginInfo: ILoginInfo) => {
  const { id, passWord } = loginInfo;
  if (id === "woony" && passWord === "1234")
    return {
      name: "정찬우",
    };
  return {
    name: "fail",
  };
};

//jwt 로그인을 위한 type 지정
type LoginResult = "success" | "fail";

export type LoginResultWithToken =
  | {
      result: "success";
      access_token: string;
    }
  | {
      result: "fail";
      access_token: null;
    };

export interface LoginRequest {
  username: string;
  password: string;
}

/*
  JWT Token 으로 로그인하기 
*/

const _secret = `@123dafdf^`;

export const loginWithToken = async (
  args: LoginRequest
): Promise<LoginResultWithToken> => {
  //APi 이용할때
  // const loginRes = await axios
  //   .post(`${BASE_URL}/auth/login`, {
  //     username: args.username,
  //     password: args.password,
  //   })
  //   .then((Response) => {
  //     return Response.data.access_token;
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  if (args.username === "woony" && args.password === "1234") {
    return {
      result: "success",
      access_token: _secret,
    };
  } else {
    return {
      result: "fail",
      access_token: null,
    };
  }
};

export const getCurrentUserInfoWithToken = async (
  token: string
): Promise<UserInfo | null> => {
  //APi 이용할때
  // const userInfo = await axios
  //   .get(`${BASE_URL}/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   })
  //   .then((Response) => {
  //     return Response.data.userInfo;
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  if (token === _secret) {
    return {
      name: "정찬우",
    };
  } else {
    return null;
  }
};

/*********
 *  localstorage에 저장 후 로그인
 * */

export const login = async (args: LoginRequest): Promise<LoginResult> => {
  // Api 이용시
  // const loginRes = await axios
  //   .post(`${BASE_URL}/auth/login`, {
  //     username: args.username,
  //     password: args.password,
  //   })
  //   .then((Response) => {
  //     saveAccessTokenToLocalStorage(Response.data.access_token);
  //     return true;
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  // if (loginRes) return "success";

  // return "fail";

  if (args.username === "woony" && args.password === "1234") {
    saveAccessTokenToLocalStorage(_secret);
    return "success";
  }
  return "fail";
};

export const getCurrentUserInfo = async (): Promise<UserInfo | null> => {
  const localToken = getAccessTokenFromLocalStorage();

  //API 이용시
  // const userInfo = await axios
  //   .get(`${BASE_URL}/profile`, {
  //     headers: {
  //       Authorization: `Bearer ${localToken}`,
  //     },
  //   })
  //   .then((Response) => {
  //     return Response.data.userInfo;
  //   })
  //   .catch((Error) => {
  //     console.log(Error);
  //   });

  // if (userInfo) return userInfo;

  // return null;

  if (localToken === _secret) {
    return {
      name: "정찬우",
    };
  }
  return null;
};
