import React, { Suspense } from 'react';
import './App.css';
import { RouterProvider } from 'react-router';
import { router } from 'router';

function App() {
  return (
    <div className='container'>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
}

export default App;
