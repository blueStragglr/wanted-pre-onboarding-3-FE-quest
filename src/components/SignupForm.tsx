import { Link } from 'react-router-dom';

function SignupForm() {
  return (
    <div>
      <h1>Create an account.</h1>
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
        <div>
          <label htmlFor="confirm-password">
            Confirm password
            <input type="password" id="confirm-password" />
          </label>
        </div>
        <button type="submit">Sign up</button>
        <p>Already have an account?</p> <Link to="/login">Login here</Link>
      </form>
    </div>
  );
}

export default SignupForm;
