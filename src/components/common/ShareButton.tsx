type ButtonTypes = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface ShareButtonProps extends ButtonTypes {
  text: string;
}

const ShareButton = ({ className, type, onClick, text }: ShareButtonProps) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default ShareButton;
