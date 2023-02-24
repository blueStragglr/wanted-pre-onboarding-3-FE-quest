import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const Box = styled.div`
    display: flex;
`

function Layout({ children }) {
    return (
        <>
            <header>
                <Header />
            </header>
            <Box>
                <nav><Sidebar /></nav>
                <main>{children}</main>
            </Box>
        </>
    );
}

export default Layout;