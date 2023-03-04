import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { pageId } = useParams();

  return <div className="float-left">{pageId} 페이지입니다.</div>;
};

export default Page;
