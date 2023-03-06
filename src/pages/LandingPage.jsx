import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login', { replace: true });
  });

  return <div>LandingPage</div>;
};

export default LandingPage;
