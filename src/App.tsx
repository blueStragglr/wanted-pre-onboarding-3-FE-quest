import { useState } from 'react';

function App() {
  function onClick() {
    alert('Hello World!');
  }

  const test = '';

  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={onClick}
      >
        Click!
      </button>
    </div>
  );
}

export default App;
