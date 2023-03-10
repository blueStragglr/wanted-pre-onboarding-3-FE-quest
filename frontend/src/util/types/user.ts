export type IUserInfo = string;

export type TgetUser = IUserInfo | null;

export interface IUser{
    username: string;
    password: string;
    userInfo: IUserInfo
}