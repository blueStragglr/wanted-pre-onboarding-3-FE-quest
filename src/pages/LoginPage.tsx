const LoginPage = () => {
	return (
		<div className="w-full h-screen flex justify-center items-center bg-slate-200">
			<div className="w-80 h-auto bg-white rounded-md flex flex-col justify-center items-center gap-2">
				<h1>임시 로그인</h1>
				<form className="flex flex-col justify-center items-center py-4 gap-3">
					<label htmlFor="">이메일</label>
					<input type="text" className="border 1px" />
					<label htmlFor="">비밀 번호</label>
					<input type="text" className="border 1px" />
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
