import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>app</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
