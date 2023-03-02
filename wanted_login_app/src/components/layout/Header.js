import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="box-border flex items-center justify-between w-full px-3 py-5 border-b flex-nowrap m0 bg-blue-10 border-lightgray-900" >
			<h1 className="font-bold text-heading1">Wanted Pre-onboarding course Login app</h1>
			<section className="login-section">
					<Link className="h-5 px-5 py-2 font-bold text-white bg-black rounded-md" to="/login">Login</Link>
			</section>
		</header>
	)
}

export default Header;