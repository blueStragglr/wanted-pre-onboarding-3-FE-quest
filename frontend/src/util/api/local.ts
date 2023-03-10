import { ACCESS_TOKEN_KEY } from "./const"


export const saveAccessTokenToLocal = (access_token : string) => 
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token)

export const getSavedAccessToken = () : string => {
    return localStorage.getItem(ACCESS_TOKEN_KEY) || ''
}