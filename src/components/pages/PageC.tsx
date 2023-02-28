import React from 'react';
import useAuthRedirect from '../../hooks/useAuthRedirect';

export default function PageC() {
  useAuthRedirect();
  return <h1>This is Page C</h1>;
}
