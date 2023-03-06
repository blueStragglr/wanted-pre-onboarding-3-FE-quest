import Main from "./components/Main/Main";
import Tap from "./components/Tap/Tap";
import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sec from "./components/Main/Sec";
import ThirdPage from "./components/Main/ThirdPage";
import Login from "./components/Login/Login";
import styled from "styled-components";
// 탭 컴포넌트와 메인 컴포넌트들을 flex하게 스타일링


const SelectionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <header>
            <Header />
          </header>
          <SelectionWrapper>
            <Tap />
            <Routes>
              <Route path="/a" element={<Main />} />
              <Route path="/b" element={<Sec />} />
              <Route path="/c" element={<ThirdPage />} />
              <Route path="/login" element={<Login />} />
              {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는경우 처리 */}
              {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
          </SelectionWrapper>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;