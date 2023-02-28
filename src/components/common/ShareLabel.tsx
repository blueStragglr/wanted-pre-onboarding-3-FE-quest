type LabelTypes = React.DetailedHTMLProps<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

interface ShareLabelProps extends LabelTypes {
  text: string;
}

const ShareLabel = ({ htmlFor, className, text }: ShareLabelProps) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {text}
    </label>
  );
};

export default ShareLabel;
