import React from 'react';
import useAuthRedirect from '../../hooks/useAuthRedirect';

export default function PageA() {
  useAuthRedirect();
  return <h1>This is Page A</h1>;
}
