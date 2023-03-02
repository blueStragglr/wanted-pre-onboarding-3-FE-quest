import { colorType } from "../types/colorType";

export default function C(): JSX.Element {
  return (
    <>
      <p style={{ color: `${colorType.isActive}` }}> This is Page C!</p>
    </>
  );
}
