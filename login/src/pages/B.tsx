import { colorType } from "../types/colorType";

export default function B(): JSX.Element {
  return (
    <>
      <p style={{ color: `${colorType.isActive}` }}> This is Page B!</p>
    </>
  );
}
