import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ID_LABEL, MAIN_LABEL, PW_LABEL, LOGIN_LABEL } from '../../constant/constant';
import styles from './Login.module.css';

interface InputType {
  email: string;
  password: string;
}
interface ActionType {
  type: string;
  payload: string;
}
function reducer(state: InputType, action: ActionType) {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

function Login() {
  const [user, dispatch] = useReducer(reducer, { email: '', password: '' });
  const navigate = useNavigate();
  const handleMainButton = () => {
    navigate('/');
  };
  return (
    <div className={styles.layout}>
      <Button onClick={handleMainButton} className={'main'} label={MAIN_LABEL} />
      <p>{ID_LABEL}</p>
      <Input
        value={user.email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'email', payload: e.target.value })
        }
      />
      <p>{PW_LABEL}</p>
      <Input
        value={user.password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch({ type: 'password', payload: e.target.value })
        }
      />
      <Button label={LOGIN_LABEL} className={'medium'} onClick={undefined} />
    </div>
  );
}

export default Login;
