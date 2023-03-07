import "./login.css";
import "./common.css"

function Login() {
  return (
    <div className="login__wrap">
      <div className="login__title">Login</div>
      <div className="login__form">
        <div>User ID</div>
        <input type="text" />
      </div>
      <div className="login__form">
        <div>User Password</div>
        <input type="password" />
      </div>
      <button>로그인</button>
    </div>
  );
}

export { Login };
