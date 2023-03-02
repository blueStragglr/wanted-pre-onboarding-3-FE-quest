import React from "react"
import { Link, useLocation } from "react-router-dom"

const pageList = [
  { pathname: "/page-a", title: "Page A" },
  { pathname: "/page-b", title: "Page B" },
  { pathname: "/page-c", title: "Page C" },
]

function SideBar() {
  const location = useLocation()

  return (
    <div className="w-40 py-3 px-2 border-r border-sky-500">
      <h3 className="text-sky-700 font-bold text-center">SIDE BAR</h3>
      <ul>
        {pageList.map((page) => (
          <li key={page.pathname}>
            <Link
              to={page.pathname}
              className={`${location.pathname === page.pathname && "text-sky-600"} p-1 flex`}
            >
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
