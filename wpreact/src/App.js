import React from 'react';
import Main from './components/Main/Main';
import Login from './components/User/Login';
// import Login from './components/User/Login';

function App() {

  // Status를 get해서 삼항 연산자로 App.js 출력
  const LoginCheck = localStorage.getItem('Status')

  return (
      <div>
        {LoginCheck === 'PreLogin' ? (<Login />) : (<Main />)}
      </div>
  );
};

export default App;