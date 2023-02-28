import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/auth';
import styles from './login.module.css';

function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth();

  const from = location.state?.from?.pathname ?? '/';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get('userName') as string;

    auth.signIn(name, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="userName">Name: </label>
        <input type="text" name="userName" required />
      </div>
      <button type="submit">Log In</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </form>
  );
}

export default Login;
