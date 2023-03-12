import { createContext } from "react";

interface LoginActionType{
    type : 'LOGIN' | 'LOGOUT'
    name : string;
}

export interface ILoggedIn{
    isLoggedIn : boolean;
    name : string;
}

export interface ILoginState{
    state: ILoggedIn;
    dispatch : React.Dispatch<LoginActionType>
}

export const loginReducer = (state:ILoggedIn, action : LoginActionType) : ILoggedIn => {
    const {type, name} = action

    switch(type){
        case 'LOGIN':
            return{
                isLoggedIn : !state.isLoggedIn,
                name
            }
        
        case 'LOGOUT':
            return{
                isLoggedIn : !state.isLoggedIn,
                name
            }

        default:
            return state
    }
}

export const userKey = 'user'

export const setUserToLocal = (args:ILoggedIn) => {
    localStorage.setItem(userKey, JSON.stringify(args))
}

export const removeUserFromLocal = () => {
    if(!localStorage.getItem(userKey)){
        throw new Error('who r u?')
    }
    localStorage.removeItem(userKey)
}

export const LoginContext = createContext<ILoginState | null>(null)