import { Outlet } from "react-router-dom";

const HomePage = (props) => {
  return (
    <div>
      <h1>홈페이지</h1>
      <div>
        <header>
          <h1>Wanted Pre-onbording course : yeongi</h1>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePage;
