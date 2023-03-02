import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

const PAGE_LIST = [
    { pageTitle: "A", id: 1 },
    { pageTitle: "B", id: 2 },
    { pageTitle: "C", id: 3 },
    { pageTitle: "D", id: 4 },
];

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isLogin = location.pathname !== "/";

    const SideNavContent = PAGE_LIST.map((page, idx) => (
        <li
            id={page.pageTitle + " " + page.id}
            onClick={() =>
                navigate(`/post/${page.id}`, { state: page.pageTitle })
            }
        >
            Page {page.pageTitle}
        </li>
    ));

    return (
        <>
            {isLogin && (
                <>
                    <HeaderNav>
                        <p>Wanted Pre-onboarding course</p>
                    </HeaderNav>
                    <SideNav>{SideNavContent}</SideNav>
                </>
            )}
        </>
    );
};

const HeaderNav = styled.nav`
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    padding-left: 2rem;
    border-bottom: 1px solid black;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
`;

const SideNav = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    top: 0;
    width: 15rem;
    height: calc(100vh - 5rem);
    margin-top: 5rem;
    padding-left: 2rem;
    border-right: 1px solid black;

    li {
        font-size: 1.5rem;
        margin-top: 2rem;

        &:hover {
            color: skyblue;
        }
    }
`;

export default Navbar;
