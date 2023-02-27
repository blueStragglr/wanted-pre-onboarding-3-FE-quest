import {useState} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';

const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const Input = styled.input`
	border-radius: 3px;
	border: 1px solid #cacaca;
	margin-bottom: 18px;
	height: 33px;
	&:focus {
		border-color: #74b9ff;
		box-shadow: rgba(0, 116, 204, 0.15) 0px 0px 0px 4px;
	}
`;

const ButtonContainer = styled.div`
	width: 100%;
	height: 38px;
	margin-top: 15px;
`;

const Button = styled.button`
	width: 100%;
	height: 38px;
	background-color: #74b9ff;
	border-radius: 3px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: none;
	font-size: 16px;
	font-weight: 800;
	color: white;
	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`;

function Loginform() {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		username: '',
		password: '',
	});

	const {username, password} = form;

	const onChange = (e) => {
		const {value, name} = e.target;
		setForm({
			...form,
			[name]: value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		navigate('/');
	};

	return (
		<Form>
			<Input name="username" placeholder="username" type="text" onChange={onChange} value={username} />
			<Input name="password" placeholder="password" type="password" onChange={onChange} value={password} />
			<ButtonContainer>
				<Button onClick={onSubmit} disabled={!(username.length > 1 && password.length > 1)}>
					Login
				</Button>
			</ButtonContainer>
		</Form>
	);
}

export default Loginform;
