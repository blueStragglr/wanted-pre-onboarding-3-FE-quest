import { useState } from "react";
import { mainStyle } from "../style";
import CustomHeader from "./CustomHeader";
import CustomNav from "./CustomNav";
import CustomSection from "./CustomSection";

const MainPage = () => {
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
      <CustomHeader />
      <div style={mainStyle}>
        <CustomNav />
        <CustomSection auth={auth} />
      </div>
    </div>
  );
};

export default MainPage;
