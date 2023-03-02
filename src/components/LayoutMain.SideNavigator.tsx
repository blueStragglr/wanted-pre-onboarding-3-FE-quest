import { Link } from "react-router-dom";
import { path } from "../routes/router";

export default function SideNavigator() {
  return (
    <>
      <Link to={path.pageA}>Page A</Link>
      <Link to={path.pageB}>Page B</Link>
      <Link to={path.pageC}>Page C</Link>
    </>
  );
}
