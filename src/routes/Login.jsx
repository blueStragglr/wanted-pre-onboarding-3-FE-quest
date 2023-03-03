import React from "react";
import { Form, redirect } from "react-router-dom";

export async function action({ request }) {
	const formData = await request.formData();
	const loginInfo = Object.fromEntries(formData);

	// login

	return redirect("/");
}

const Login = () => {
	return (
		<div className="grid justify-center items-center h-full">
			<div className="space-y-16 shadow-2xl p-10 rounded-md">
				<h1 className="text-4xl text-center text-blue-500 font-bold">Login</h1>
				<Form method="post" className="flex flex-col gap-y-6">
					<div className="flex justify-between items-center gap-x-4">
						<label className="w-24">이름</label>
						<input
							type="text"
							name="name"
							placeholder="이름을 입력해 주세요."
							className="shadow-md px-2 py-4 w-full outline-blue-500/50 active:shadow-none"
						/>
					</div>

					<div className="flex justify-between items-center gap-x-4">
						<label className="w-24">비밀번호</label>
						<input
							type="password"
							name="password"
							placeholder="비밀번호를 입력해 주세요."
							className="shadow-md px-2 py-4 w-full outline-blue-500/50"
						/>
					</div>

					<button
						type="submit"
						className="mt-10 bg-blue-500 text-white hover:bg-blue-500/50 rounded-md transition p-2"
					>
						Login
					</button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
