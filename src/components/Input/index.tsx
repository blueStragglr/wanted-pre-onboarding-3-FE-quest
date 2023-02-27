import { forwardRef, LegacyRef } from "react";
import * as S from "./style";

interface Props {
  placeholder?: string;
}

const Input = ({ placeholder }: Props, ref: LegacyRef<HTMLInputElement>) => {
  return <S.Wrapper ref={ref} placeholder={placeholder} />;
};

export default forwardRef(Input);
