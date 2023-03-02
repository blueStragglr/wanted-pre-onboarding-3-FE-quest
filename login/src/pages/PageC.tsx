import React from "react";
import withAuth from "../hoc/withAuth";

const PageC = () => {
  return <h3>Page C 입니다. 회원만 가능!</h3>;
};

export default withAuth(PageC);
