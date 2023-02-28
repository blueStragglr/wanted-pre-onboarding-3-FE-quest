import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthLayout from './components/AuthLayout';
import LoginForm from './components/LoginForm';
import RootLayout from './components/RootLayout';
import SignupForm from './components/SignupForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="page-a" element={<div>Page A</div>} />
          <Route path="page-b" element={<div>Page B</div>} />
          <Route path="page-c" element={<div>Page C</div>} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
