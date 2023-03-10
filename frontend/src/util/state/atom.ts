import { atom } from "recoil";

const localStorageEffect = (key : string) => 
    ({setSelf, onSet} : any) => {
        const savedPages = localStorage.getItem(key);
        if(savedPages !== null){
            setSelf(JSON.parse(savedPages))
        }
        onSet((newValue: any, _: any, isReset:boolean) => {
            isReset
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(newValue))
        });
    };
    
export interface ILoggedIn{
    isLoggedIn : boolean;
    name : string;
}

export const loginState = atom<ILoggedIn>({
    key : 'login',
    default : {
        isLoggedIn : false,
        name : ''
    },
    // TODO : access_token 을 통해서 사용자 정보를 가져올 수 있는데 로컬에 사용자 정보를 저장 해야 하는 이유?
    effects : [localStorageEffect('login')]
})