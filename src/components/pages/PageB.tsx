import React from 'react';
import useAuthRedirect from '../../hooks/useAuthRedirect';

export default function PageB() {
  useAuthRedirect();
  return <h1>This is Page B</h1>;
}
