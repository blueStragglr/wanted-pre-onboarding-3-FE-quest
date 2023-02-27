import { ILoginInputViewProps, ThemeLoginInput } from "../../types/login";
import styled from "@emotion/styled";
import {
  colorBasicBlack,
  colorBorder,
  colorWarning,
  colorWarningBackground,
  colorWhite,
} from "../../../../common/styles/commonColor";

const InputContainer = styled.input<ThemeLoginInput>`
  font-family: inherit;
  width: 100%;
  padding: 8px 10px;
  border-radius: 5px;
  border: 1px solid
    ${(props) => (props.isInputFeedback ? colorWarning : colorBorder)};
  background-color: ${(props) =>
    props.isInputFeedback ? colorWarningBackground : colorWhite};

  ::placeholder {
    color: ${(props) =>
      props.isInputFeedback ? colorBasicBlack : colorBorder};
  }
`;

const LoginInputView = ({
  inputType,
  minLength,
  value,
  isInputFeedback,
  placeholder,
  onChange,
  onBlur,
}: ILoginInputViewProps) => {
  return (
    <InputContainer
      type={inputType}
      min={minLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      isInputFeedback={isInputFeedback}
    />
  );
};

export default LoginInputView;
