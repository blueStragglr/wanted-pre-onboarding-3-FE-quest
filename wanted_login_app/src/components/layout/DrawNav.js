import { Link } from 'react-router-dom';

const DrawNav = () => {

	return (
		<nav role="navigation" className="box-border relative flex flex-col h-full px-2 py-5 border-r border-lightgray-900 w-60 bg-blue-5">
			<ul className="relative flex flex-col items-center justify-center w-full font-bold flex-nowrap ">
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="메인Home" to="/" >메인Home</Link></li>
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="인트로Intro" to="/intro" >인트로Intro</Link></li>
				<li className="mb-2"><Link className="text-base hover:text-orange-300" title="페이지Page" to="/sub" >페이지Page</Link></li>
			</ul>
		</nav>
	)
}

export default DrawNav;

