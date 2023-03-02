import { Link } from "react-router-dom";
import { path } from "../routes/router";

export default function SideNavigator() {
  return (
    <div className={`flex flex-col border-r border-black min-h-screen pt-14`}>
      <Link className="p-3" to={path.pageA}>
        Page A
      </Link>
      <Link className="p-3" to={path.pageB}>
        Page B
      </Link>
      <Link className="p-3" to={path.pageC}>
        Page C
      </Link>
    </div>
  );
}
