import Link from "../UI/Link";

const DrawNav = () => {

	return (
		<nav className="container flex flex-col w-48 h-full bg-sky-100 relative">
			<section className="menu-section">
					<Link title="메인" text="메인" url="/"/>
					<Link title="메인" text="메인" url="/"/>
					<Link title="메인" text="메인" url="/"/>
					<Link title="메인" text="메인" url="/"/>


			</section>
		</nav>
	)
}

export default DrawNav;