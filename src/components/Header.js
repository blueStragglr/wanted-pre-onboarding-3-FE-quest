import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { cls } from "../util";

const Header = () => {
  const { pathname } = useLocation();
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="max-w-[1200px] m-auto px-4">
      {/* header */}
      <div className="flex items-center justify-between h-20">
        <div className="space-x-10 flex items-center">
          <div onClick={() => setSidebar(!sidebar)} className="cursor-pointer">
            <FaBars />
          </div>
          <h1 className="font-bold text-xl text-blue-700">Header</h1>
        </div>

        <Link to="/login">
          <BiLogIn size={25} className="text-blue-700" />
        </Link>
      </div>

      {/* sidebar & contents */}
      <section className="flex space-x-10">
        {/* sidebar */}
        {sidebar && (
          <div className="w-40 space-y-3">
            <div>
              <Link to={"/"}>
                <div
                  className={cls(
                    pathname === "/" ? "border-blue-500" : "border-gray-500",
                    "w-full cursor-pointer group border-r-2 h-10 flex items-center hover:duration-300 hover:border-blue-800"
                  )}
                >
                  <div
                    className={cls(
                      pathname === "/" ? "text-blue-500" : "",
                      "group-hover:text-blue-800 group-hover:animate-bounce duration-300"
                    )}
                  >
                    PageA
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/pageb"}>
                <div
                  className={cls(
                    pathname.startsWith("/pageb")
                      ? "border-blue-500"
                      : "border-gray-500",
                    "w-full cursor-pointer group border-r-2 h-10 flex items-center hover:duration-300 hover:border-blue-800"
                  )}
                >
                  <div
                    className={cls(
                      pathname.startsWith("/pageb") ? "text-blue-500" : "",
                      "group-hover:text-blue-800 group-hover:animate-bounce duration-300"
                    )}
                  >
                    PageB
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Link to={"/pagec"}>
                <div
                  className={cls(
                    pathname.startsWith("/pagec")
                      ? "border-blue-500"
                      : "border-gray-500",
                    "w-full cursor-pointer group border-r-2 h-10 flex items-center hover:duration-300 hover:border-blue-800"
                  )}
                >
                  <div
                    className={cls(
                      pathname.startsWith("/pagec") ? "text-blue-500" : "",
                      "group-hover:text-blue-800 group-hover:animate-bounce duration-300"
                    )}
                  >
                    PageC
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}

        {/* contents */}
        <Outlet></Outlet>
      </section>
    </div>
  );
};

export default Header;
