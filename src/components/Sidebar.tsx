import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";

import { mainRoutes } from "../router";

function LinkComp({ path, current }: { path: string; current: string }) {
  return (
    <li>
      <Link
        to={path}
        className={clsx("font-semibold", {
          "text-sky-500": path === current,
        })}
      >
        Page {path.slice(1).toUpperCase()}
      </Link>
    </li>
  );
}

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className="px-10 py-5 w-44 border-r-2">
      <nav>
        <ul className="flex flex-col gap-5">
          {mainRoutes.slice(1).map((mr) => (
            <LinkComp key={mr.path} path={mr.path} current={location.pathname} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
