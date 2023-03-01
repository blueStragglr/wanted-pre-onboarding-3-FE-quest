import { Link } from 'react-router-dom';

const DrawNav = () => {

	return (
		<nav role="navigation" className="flex flex-col w-48 h-full bg-sky-100 relative">
			<ul className="relative w-full">
				<li><Link title="메인Home" to="/" >메인Home</Link></li>
				<li><Link title="인트로Intro" to="/intro" >인트로Intro</Link></li>
				<li><Link title="로그인Login" to="/login" >로그인Login</Link></li>

			</ul>
		</nav>
	)
}

export default DrawNav;

