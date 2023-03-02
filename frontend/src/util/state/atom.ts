import { atom } from "recoil";

const pageDefault = ['a', 'b', 'c']

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


export const pageState = atom({
    key : 'pages',
    default : pageDefault,
    effects : [localStorageEffect('pages')]
})