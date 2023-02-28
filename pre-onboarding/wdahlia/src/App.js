import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { LoginProvider } from './context/LoginContext';

// react router 사용해서 CSR 구현
// 기본 path / 에서 시작, nav 바의 문구를 클릭한다면 기본 index로 이동 Home Component로
// /:tabId의 경우 tab 클릭시, 그 페이지의 tab 정보 출력하게끔 만들기

const router = createBrowserRouter([{
  path: '/', // 기본 path 설정
}]);

function App() {
  return (
    <LoginProvider>
      <RouterProvider router={router}/>
    </LoginProvider>
  )
}

export default App;
