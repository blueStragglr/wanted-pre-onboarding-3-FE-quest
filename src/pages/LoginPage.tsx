import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({ username: '', password: '' });
  const [error, setError] = useState({ status: false, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.currentTarget.id]: e.currentTarget.value } as {
      [K in keyof User]: User[K];
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      setError({
        ...error,
        status: true,
        message: 'Please enter username or password!',
      });
    } else {
      setError({
        ...error,
        status: false,
        message: '',
      });
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  };

  return (
    <section className='section'>
      <h1 className='title'>Log In</h1>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          id='username'
          placeholder='Username'
          value={user.username}
          onChange={handleChange}
          className={`${error.status ? 'error' : ''}`}
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          value={user.password}
          onChange={handleChange}
          className={`${error.status ? 'error' : ''}`}
        />
        <button>Log In</button>
      </form>
      {error.status && <span className='error-message'>{error.message}</span>}
    </section>
  );
};
