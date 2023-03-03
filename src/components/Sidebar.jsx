import { useRef, useState } from "react";
import { Form, NavLink } from "react-router-dom";

const Sidebar = ({ pages }) => {
	const inputRef = useRef(null);
	const [isDisabled, setIsDisabled] = useState(true);

	const handleInputChange = () => {
		if (inputRef.current.value.length > 0) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	};

	const linkStyle = "block py-4 font-semibold rounded-md px-2";

	return (
		<div className="w-[20rem] bg-white border-r-2 felx flex-col">
			<Form method="post" className="flex items-center gap-x-4 p-4 border-b-2">
				<input
					type="text"
					name="title"
					ref={inputRef}
					onChange={handleInputChange}
					placeholder="페이지 이름을 입력해 주세요."
					className={`w-full shadow-md rounded-md p-2 outline-1 ${
						isDisabled ? "outline-black/40" : "outline-blue-500"
					} `}
				/>
				<button
					type="submit"
					className="disabled:bg-gray-400 min-w-max bg-blue-500 rounded-md px-4 py-2 font-semibold text-white"
					disabled={isDisabled}
				>
					추가
				</button>
			</Form>
			<nav className="p-6">
				{pages.length ? (
					<ul className="flex flex-col gap-y-2">
						{pages.map((page) => (
							<li key={page.id} className="">
								<NavLink
									to={`pages/${page.id}`}
									className={({ isActive }) =>
										isActive
											? `bg-blue-500 text-white ${linkStyle}`
											: `hover:bg-gray-300/80 ${linkStyle}`
									}
								>
									{page.title}
								</NavLink>
							</li>
						))}
					</ul>
				) : (
					<p className="py-4">
						<i className="text-gray-400">No pages</i>
					</p>
				)}
			</nav>
		</div>
	);
};

export default Sidebar;
