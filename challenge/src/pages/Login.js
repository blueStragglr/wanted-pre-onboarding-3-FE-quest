import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
    return(
        <div>
            <Form style={{
                width:'40%', 
                textAlign:'center', 
                margin:'0 auto',
                marginTop:'10%', 
                border:'1px solid black',
                borderRadius:'10px',
                padding:'3%'
                }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>아이디</Form.Label>
                    <Form.Control type="text" placeholder="userID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    로그인
                </Button>
                <p>
                    <a style={{fontSize:'10px'}} href='/'>
                        Main 바로가기
                    </a>
                </p>
            </Form>
        </div>
    )
}
export default Login;