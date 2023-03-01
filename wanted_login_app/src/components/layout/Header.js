import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="flex flex-nowrap items-center	justify-between	 w-full m0 bg-blue-10 py-5 px-3 border-b-1 border-gray-500" >
			<h1 className="text-lg	font-bold">Wanted Pre-onboarding course Login app</h1>
			<section className="login-section">
					<Link className="h-5 px-5 py-2 font-bold rounded-md bg-black  text-white" to="/login">Login</Link>
			</section>
		</header>
	)
}

export default Header;