import { colorType } from "../types/colorType";

/**
 * Profile 페이지는 로그인된 유저만 접근이 가능합니다.
 */
export default function Protect(): JSX.Element {
  return (
    <>
      <p style={{ color: `${colorType.palette.blue}` }}>
        Hello!! Authorized user
      </p>
    </>
  );
}
