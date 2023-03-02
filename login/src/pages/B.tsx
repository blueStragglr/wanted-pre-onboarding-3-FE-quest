import { colorType } from "../types/colorType";

export default function B(): JSX.Element {
  return (
    <>
      <p style={{ color: `${colorType.event.isActive}` }}> This is Page B!</p>
    </>
  );
}
