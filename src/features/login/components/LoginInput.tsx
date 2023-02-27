import {
  ILoginInputProps,
  ILoginInputViewProps,
  LOGININPUT_TYPE,
} from "../types/login";
import LoginInputView from "./views/LoginInputView";

const LoginInput = ({
  minLength,
  type,
  isInputFeedback,
  value,
  onChange,
  onBlur,
}: ILoginInputProps) => {
  const handleInputType = (type: string) => {
    if (type === LOGININPUT_TYPE.PASSWORD) {
      return "password";
    }

    return "text";
  };

  const handleInputPlaceholder = (type: string) => {
    if (type === LOGININPUT_TYPE.PASSWORD) {
      return "비밀번호를 입력해주세요";
    }

    return "아이디를 입력해주세요";
  };

  const loginInputViewProps: ILoginInputViewProps = {
    inputType: handleInputType(type),
    placeholder: handleInputPlaceholder(type),
    minLength,
    isInputFeedback,
    value,
    onChange,
    onBlur,
  };
  return <LoginInputView {...loginInputViewProps} />;
};

export default LoginInput;
