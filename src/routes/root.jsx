import { Outlet, Link, } from "react-router-dom";
import { getPages } from "../pages";

// export async function loader() {
//     const pages = await getPages();
//     return {pages};
// }

export default function Root() {
    const pages = getPages();
    return (
        <>
            <header>
                <a href="/">
                    <h1>Wanted Pre-onboarding course</h1>
                </a>
            </header>
            <div id="contents">
                <nav id="lnb">
                    <ul>
                        {pages.map((page) => (
                            <li key={page.id}>
                                <Link to={`pages/${page.id}`}>
                                    Page {page.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div id="loginBtn">
                        <Link to="login">로그인</Link>
                    </div>
                </nav>
                <main>
                    <div id="content">
                        <Outlet />
                    </div>
                </main>
            </div>
        </>
    )
}