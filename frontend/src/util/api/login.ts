import axios from "axios";
import { IGetUser, ILoginPayload, IToken, TLoginResult } from "../types/login";
import { IUserInfo, TgetUser } from "../types/user";
import { ACCESS_TOKEN_KEY, BASE_URL } from "./const";
import { getSavedAccessToken } from "./local";

// TODO(2-1): 로그인 API 호출 및 토큰 반환하기
// POST, `${ BASE_URL }/auth/login`을 호출하세요.
// API Spec은 강의 자료를 참고하세요.
// access_token 발급에 성공한 경우에는 { result: 'success', access_token: string } 형태의 값을 반환하세요.
// Promise<T_LoginResultWithToken>
export const loginWithToken = async (args:ILoginPayload) : Promise<TLoginResult> => {
    // ! fetch API logic => CORS Error!
    // const loginResult = await fetch(`${BASE_URL}/auth/login`, {
    //     method: "POST",
    //     headers: {
    //         'Content-Type' : 'application/json'
    //     },
    //     body : JSON.stringify(arg)
    // })
    // console.log(loginResult)

    // ! 객체 구조분해 할당 시 type 선언하는 방법
    const {data: {access_token}} : IToken
    = await axios.post(`${BASE_URL}/auth/login`, args) 

    if(!access_token){
        return{
            result :'fail',
            access_token: null
        }
    }
    return {
        result:'success',
        access_token
    }
}   

// TODO(2-1): 함수에서 토큰을 직접 주입받아 사용하기
// GET, `${ BASE_URL }/profile`을 호출하세요.
// argument로 전달받은 token을 Authorization header에 Bearer token으로 넣어주세요.
// API Spec은 강의 자료를 참고하세요.
// ! 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.
export const getUserWithToken = async (access_token ?:string) : Promise<IUserInfo | null> => {
    const {data : {userInfo : {name}}} : IGetUser = await axios.get(`${ BASE_URL }/profile`, {
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}`
        }
    })
    if(!name) return null
    return name as IUserInfo
}

// TODO(2-2): 로그인 API 호출 및 access token 로컬스토리지에 저장하기
// POST, `${ BASE_URL }/auth/login`을 호출하세요.
// API Spec은 강의 자료를 참고하세요.
// access_token 발급에 성공한 경우에는 saveAccessTokenToLocalStorage 함수를 호출하여 access_token을 localStorage에 저장하고 'success'를 반환하세요.
export const loginWithLocal = async(args:ILoginPayload) : Promise<TLoginResult> => {
    const {data: {access_token}} : IToken
    = await axios.post(`${BASE_URL}/auth/login`, args) 

    if(!access_token){
        return {
            result:'fail',
            access_token: null
        }
    }
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token)

    return {
        result:'success',
        access_token: undefined
    }
}

// TODO(2-2): 로컬스토리지에서 토큰을 가져와 사용하기
// GET, `${ BASE_URL }/profile`을 호출하세요.
// 로컬 스토리지에 있는 token을 getAccessTokenFromLocalStorage로 가져와서 Authorization header에 Bearer token으로 넣어주세요.
// API Spec은 강의 자료를 참고하세요.
// 유저 정보 조회에 성공한 경우에는 UserInfo 타입의 값을 반환하세요.
export const getUserWithLocal = async () : Promise<TgetUser>  => {
    const savedToken = getSavedAccessToken()
    if(!savedToken) return null

    const {data: {userInfo:{name}}} : IGetUser= await axios.get(`${BASE_URL}/profile`,{
        headers:{
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${savedToken}`
        }
    })
    if(!name) return null
    return name as IUserInfo
}