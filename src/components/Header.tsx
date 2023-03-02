import { useContext } from "react";
import { LoginStateContext, LoginDispatchContext } from "../contexts/LoginContext";

function Header() {
  const state = useContext(LoginStateContext);
  const dispatch = useContext(LoginDispatchContext);

  const onClickLoginBtn = () => {
    if (!dispatch) throw new Error('dispatch error');
    dispatch({type: 'LOGIN'});
  };

  const onClickLogoutBtn = () => {
    if (!dispatch) throw new Error('dispatch error');
    dispatch({type: 'LOGOUT'});
  };

  return (
    <div className="Header">
      <h1>Wanted Pre-onboarding course</h1>
      <div className="Login"> 
        {state?.isLogin ? 
          <button onClick={onClickLogoutBtn}>Logout</button> : 
          <button onClick={onClickLoginBtn}>Login</button>}
      </div>
    </div>
  )
}

export default Header;
