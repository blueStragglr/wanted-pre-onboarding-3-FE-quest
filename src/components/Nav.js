import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #b2bec3;
`;

const H1 = styled.h1`
	padding: 20px 40px;
	color: #2d3436;
`;

const ButtonContainer = styled.div`
	width: 100px;
	margin-right: 30px;
`;

const Button = styled.button`
	font-size: 18px;
	font-weight: 600;
	padding: 8px 15px;
	border: none;
	background-color: transparent;
	color: #74b9ff;
	transition: 0.5s;
	&:hover {
		background-color: #74b9ff;
		color: white;
		transition: 0.5s;
	}
`;

function Nav() {
	const navigate = useNavigate();

	return (
		<NavContainer>
			<H1>Wanted Pre-onboarding course</H1>
			<ButtonContainer>
				<Button onClick={() => navigate('/login')}>Login</Button>
			</ButtonContainer>
		</NavContainer>
	);
}
export default Nav;
