import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="px-4 font-bold border-b 1px solid #ccc h-16 flex items-center justify-between">
			<h1>원티드 프리온보딩 챌린지</h1>
			<button
				className="hover:text-gray-400"
				onClick={() => {
					navigate("/page");
				}}
			>
				홈으로 가기
			</button>
		</div>
	);
};

export default Header;
