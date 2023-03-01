import { Link } from 'react-router-dom';

const DrawNav = () => {

	return (
		<nav role="navigation" className="flex flex-col w-60 h-full px-2 py-5 bg-blue-5 relative">
			<ul className="relative w-full flex flex-col  flex-nowrap items-center	justify-center font-bold	 ">
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="메인Home" to="/" >메인Home</Link></li>
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="인트로Intro" to="/intro" >인트로Intro</Link></li>
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="로그인Login" to="/login" >로그인Login</Link></li>

			</ul>
		</nav>
	)
}

export default DrawNav;

