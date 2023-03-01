import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
	const navigate = useNavigate();
	const [userInputs, setUserInputs] = useState({
		email: "",
		password: "",
	});

	console.log(userInputs);

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (Object.values(userInputs).some((value) => value === "")) {
			alert("email과 password를 입력해주세요!");
			return;
		}

		localStorage.setItem("token", "temporalToken");
		navigate("/page");
	};

	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = event;

		setUserInputs({
			...userInputs,
			[name]: value,
		});
	};

	return (
		<div className="w-full h-screen flex justify-center items-center bg-slate-200">
			<div className="w-80 h-auto bg-white rounded-md flex flex-col justify-center items-center gap-2">
				<h1 className="py-5 font-bold text-buttonColor ">임시 로그인</h1>
				<form
					onSubmit={submitHandler}
					className="flex flex-col justify-center items-center py-4 gap-3"
				>
					<label>이메일</label>
					<input
						type="text"
						className="border 1px"
						name="email"
						onBlur={changeHandler}
					/>
					<label>비밀 번호</label>
					<input
						type="text"
						className="border 1px"
						name="password"
						onBlur={changeHandler}
					/>
					<button
						type="submit"
						className="bg-buttonColor text-white mt-10 py-2 px-4 rounded-lg"
					>
						로그인
					</button>
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
