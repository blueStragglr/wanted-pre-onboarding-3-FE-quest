import Header from "./Header";
import SideBar from "./SideBar";
import { StyledLayout } from "./styled";

const Layout = ({children}) => {
    return(
        <StyledLayout>
            <Header />
            <main className="main-box">
                <SideBar />
                <section className="main">
                    {children}
                </section>
            </main>
        </StyledLayout>
    )
}

export default Layout;