import { useState } from "react";
import { InputValidator } from "../types/login";

const useLogin = (validateFn: InputValidator) => {
  const [inputState, setInputState] = useState({ value: "", isTouched: false });

  const isInputValueValid = validateFn(inputState.value);
  const isInputValueFeedback = inputState.isTouched && !isInputValueValid;

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputState({ value: event.target.value, isTouched: true });
  };

  const handleInputBlur = () => {
    setInputState((prev) => ({ ...prev, isTouched: true }));
  };

  const resetInputValue = () => {
    setInputState({ value: "", isTouched: false });
  };

  return {
    inputValue: inputState.value,
    isValueValid: isInputValueValid,
    isInputFeedback: isInputValueFeedback,
    onChangeInputValue: handleInputValueChange,
    onBlurInput: handleInputBlur,
    resetInputValue: resetInputValue,
  };
};

export default useLogin;
