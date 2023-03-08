export interface IUserInfo{
    username:string;
}

export interface IUser{
    username:string;
    password:string;
    userInfo:IUserInfo
}

export const users:IUser[] = [
    {
        username : 'woong123',
        password : 'qwer1234!',
        userInfo : {
            username : 'woong'
        }
    },
    {
        username : 'choi99',
        password : 'qwer1234!',
        userInfo : {
            username : 'choi'
        }
    },
]