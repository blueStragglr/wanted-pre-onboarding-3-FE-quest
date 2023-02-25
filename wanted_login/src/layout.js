import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div>
            <header style={{
            padding: '20px',
            borderBottom: '1px solid black',
            fontWeight: '700',
            fontSize: '20px',
            display: 'flex',
            justifyContent: 'space-between'
            }}>
                <Link to="/page" style={{textDecorationLine: 'none', color: 'black'}}>Wanted Pre-onboarding course</Link>
                <Link to="/" style={{textDecorationLine: 'none', color: 'black'}}>로그인하러가기</Link>
            </header>
            <div style={{
                display: 'flex',
            }}>
                <section style={{
                    width: '10%',
                    height: '100vh',
                    padding: '40px',
                    fontWeight: '700',
                    borderRight: '1px solid black',
                }}>
                    <Link to="/page/A" style={{textDecorationLine: 'none', color: 'black'}}>
                        <div>page A</div>
                    </Link>
                    <Link to="/page/B" style={{textDecorationLine: 'none', color: 'black'}}>
                        <div style={{marginTop: "40px"}}>page B</div>
                    </Link>
                    <Link to="/page/C" style={{textDecorationLine: 'none', color: 'black'}}>
                        <div style={{marginTop: "40px"}}>page C</div>
                    </Link>
                </section>
                <Outlet style={{width: '90%'}} />
            </div>
        </div>
    )
}

export default Layout;