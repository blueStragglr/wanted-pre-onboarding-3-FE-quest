import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { signOut } from "../features/authSlice";

function Mypage() {
  const { auth } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  console.log(!auth.id);
  const onClick = () => {
    dispatch(signOut());

    alert("로그아웃이 완료되었습니다!");
    navigate("/");
  };

  return (
    <div className="max-w-xl text-center">
      <div className="flex items-center pb-4">
        <h4 className="text-xl font-bold">{auth.username}</h4>님 좋은 하루
        보내세요 😎
      </div>

      <button className="btn-ghost btn text-lg font-semibold" onClick={onClick}>
        로그아웃
      </button>
    </div>
  );
}
export default Mypage;
