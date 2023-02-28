import { forwardRef } from "react";

type InputTypes = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface ShareInputProps extends InputTypes {}

const ShareInput = forwardRef<HTMLInputElement, ShareInputProps>(
  ({ type, placeholder, className, id }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        className={className}
        id={id}
      />
    );
  },
);

export default ShareInput;
