import { type FormEvent } from 'react';

const Login = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // ...
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="User Name"></input>
      <input type="password" placeholder="Password"></input>
    </form>
  );
};

export default Login;
