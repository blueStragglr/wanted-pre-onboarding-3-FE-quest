import React from "react";
import withAuth from "../hoc/withAuth";

const PageB = () => {
  return <h3>Page B 입니다. 회원만 가능!</h3>;
};

export default withAuth(PageB);
