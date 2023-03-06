import { useParams } from "react-router-dom";

export const TestPage = () => {
  const param = useParams();

  return <div>{`This is page ` + param.id}</div>;
};
