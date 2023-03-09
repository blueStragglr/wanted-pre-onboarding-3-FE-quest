export interface SignInRequestProps {
  email: string;
  password: string;
}

export interface SignUpRequestProps {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface SignResponseProps {
  access_token: string;
  message: string;
}
