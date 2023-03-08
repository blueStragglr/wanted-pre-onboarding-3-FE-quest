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
    username : string;
}

export const loginState = atom<ILoggedIn>({
    key : 'login',
    default : {
        isLoggedIn : false,
        username : ''
    },
    effects : [localStorageEffect('login')]
})