import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    navigate('/');
  };

  return (
    <nav id="login">
      <h1 id="login-title">Login</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-item">
          <input
            type="text"
            placeholder="Username"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="login-item">
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="submit-button" type="submit">
          submit
        </button>
      </form>
    </nav>
  );
}
