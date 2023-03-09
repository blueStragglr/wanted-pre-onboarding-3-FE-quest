export interface LoginResponse {
  message: string;
  token: string;
}

export interface Token {
  user: string;
  secret: string;
}
