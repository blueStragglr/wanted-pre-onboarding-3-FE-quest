import Loginform from '../components/Loginform';
import styled from 'styled-components';

const Container = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fafafa;
`;

const LoginWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 300px;
	height: 320px;
	border-radius: 10px;
	justify-content: center;
	background-color: white;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const H2 = styled.h2`
	font-size: 30px;
	font-weight: bold;
	padding-bottom: 30px;
`;

function Login() {
	return (
		<Container>
			<LoginWrapper>
				<H2>Login</H2>
				<Loginform />
			</LoginWrapper>
		</Container>
	);
}
export default Login;
