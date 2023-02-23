import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header () {

    let navigate = useNavigate();

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={()=>{navigate('/')}} >Wanted Pre-onboarding course</Navbar.Brand>
                    <Nav>
                        <Nav.Link onClick={()=>{navigate('/login')}}>Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header;