import React, { useReducer } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { ID_LABEL, PW_LABEL, LOGIN_LABEL } from '../../constant/constant';
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

  return (
    <div className={styles.layout}>
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
