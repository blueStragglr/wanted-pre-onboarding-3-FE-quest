export type LoginSuccessMessage = 'SUCCESS';
export type LoginFailMessage = 'FAIL';

export interface LoginResponse {
  message: LoginSuccessMessage | LoginFailMessage;
  token: string;
}

export interface Token {
  secret: string;
  user: string;
}
