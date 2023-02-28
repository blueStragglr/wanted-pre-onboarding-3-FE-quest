import { Link } from 'react-router-dom';

function LoginForm() {
  return (
    <div>
      <h1>Login to your account.</h1>
      <form>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" id="email" />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input type="password" id="password" />
          </label>
        </div>
        <button type="submit">Login</button>
        <p>Don&apos;t have an account yet?</p> <Link to="/signup">Sign up</Link>
      </form>
    </div>
  );
}

export default LoginForm;
