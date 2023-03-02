import { Link } from "react-router-dom";
import Svg from "../components/Svg";

function NotFound() {
  return (
    <div className="mt-8 grid place-items-center gap-8">
      <Svg />

      <h1 className="text-2xl font-bold">이런 주소를 잘 못 찾아오셨습니다!</h1>

      <Link to="/" className="btn-ghost btn text-lg font-semibold">
        홈으로 가기
      </Link>
    </div>
  );
}
export default NotFound;
