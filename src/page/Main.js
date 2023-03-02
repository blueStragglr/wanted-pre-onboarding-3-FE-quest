import React from "react";
import Aside from "../component/Aside";

const Main = () => {
  return (
    <div className="Main">
      <div className="inner">
        <Aside />
        <article>main page</article>
      </div>
    </div>
  );
};

export default Main;
