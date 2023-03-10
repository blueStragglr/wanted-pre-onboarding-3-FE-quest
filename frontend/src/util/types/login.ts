export type TLoginResultWithLocal = 'fail' | 'success';

export type TLoginResult = {
    result : 'success',
    access_token : string | undefined;
} | {
    result : 'fail',
    access_token : null
}

export interface ILoginPayload{
    username: string;
    password: string;
}

export interface IToken{
    data:{access_token : string}
}

export interface IGetUserType{
    userId:number;
    userInfo:{
        name:string;
    }
    username:string
}

export interface IGetUser{
    data:IGetUserType
}
