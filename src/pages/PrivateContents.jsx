import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const PrivateContents = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <div className="PrivateContents">
        <h1>Private Contents</h1>
        <div>{currentUser.id}님에게만 보여지는 페이지입니다.</div>
      </div>
    </>
  );
};

export default PrivateContents;
