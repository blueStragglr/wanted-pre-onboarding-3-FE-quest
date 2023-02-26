import { useState } from "react";
import { mainStyle } from "../style";
import CustomHeader from "./CustomHeader";
import CustomNav from "./CustomNav";
import CustomSection from "./CustomSection";

const MainPage = ({
  auth,
  setAuth,
}: {
  auth: boolean;
  setAuth: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="App">
      <CustomHeader />
      <div style={mainStyle}>
        <CustomNav auth={auth} setAuth={setAuth} />
        <CustomSection auth={auth} />
      </div>
    </div>
  );
};

export default MainPage;
