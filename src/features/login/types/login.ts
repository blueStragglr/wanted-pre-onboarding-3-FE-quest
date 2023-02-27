export interface ILoginProps {
  isLoginButtonDisabled: boolean;
  idInputValue: string;
  passwordInputValue: string;
  isIdInputFeedback: boolean;
  isPasswordInputFeedback: boolean;
  onChangeIdInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlurIdInput: () => void;
  onBlurPasswordInput: () => void;
  onSubmitLoginForm: (e: React.FormEvent<HTMLFormElement>) => void;
}

export type LoginSliceState = {
  isLogin: boolean;
};

export type InputValidator = (inputValue: string) => boolean;

export interface ILoginInputProps {
  minLength: number;
  type: LOGININPUT_TYPE;
  value: string;
  isInputFeedback: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export type ThemeLoginForm = {
  isIdInputFeedback: boolean;
  isPasswordInputFeedback: boolean;
};

export type ThemeLoginButton = {
  isLoginButtonDisabled: boolean;
};

export enum LOGININPUT_TYPE {
  ID = "id",
  PASSWORD = "password",
}

export interface ILoginInputViewProps {
  inputType: string;
  placeholder: string;
  minLength: number;
  value: string;
  isInputFeedback: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

export type ThemeLoginInput = {
  isInputFeedback: boolean;
};
