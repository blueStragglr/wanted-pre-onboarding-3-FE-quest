import { colorType } from "../types/colorType";

export default function A(): JSX.Element {
  return (
    <>
      <p style={{ color: `${colorType.palette.blue}` }}> This is Page A!</p>
    </>
  );
}
