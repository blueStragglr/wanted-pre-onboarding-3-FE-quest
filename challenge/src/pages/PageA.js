import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PageA () {
    return(
        <div>
            <div className="header">
                <Header/>
            </div>
            <div className="body">
                <Row >
                    <Col className="sideBar">
                        <SideNav/>
                    </Col>
                    <Col className="content">
                        pageA
                    </Col>
                    </Row>
            </div>
        </div>
    )
}
export default PageA;