import { Route, Routes } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";

import { useAuthContext } from "@/Context/AuthContextProvider";
import { routes } from "@/Routers/routes";

const Routers = () => {
  const {
    state: { isLogin }
  } = useAuthContext();
  return (
    <>
      <Routes>
        {routes.public.map((route) => {
          return route.subPage && route.subPage.length !== 0 ? (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.layout && <route.layout />}
            >
              <Route
                index={true}
                element={route.component && <route.component />}
              />
              {
                <Route path={route.pathname}>
                  {route.subPage.map((subRoute) => {
                    return (
                      <Route
                        key={subRoute.id}
                        path={subRoute.pathname}
                        element={subRoute.component && <subRoute.component />}
                      />
                    );
                  })}
                </Route>
              }
            </Route>
          ) : (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.component && <route.component />}
            />
          );
        })}
      </Routes>
      <PrivateRoutes isLogin={isLogin}>
        {routes.private.map((route) => {
          return route.subPage && route.subPage.length !== 0 ? (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.layout && <route.layout />}
            >
              <Route
                index={true}
                element={route.component && <route.component />}
              />
              {
                <Route path={route.pathname}>
                  {route.subPage.map((subRoute) => {
                    return (
                      <Route
                        key={subRoute.id}
                        path={subRoute.pathname}
                        element={subRoute.component && <subRoute.component />}
                      />
                    );
                  })}
                </Route>
              }
            </Route>
          ) : (
            <Route
              key={route.id}
              path={route.pathname}
              element={route.component && <route.component />}
            />
          );
        })}
      </PrivateRoutes>
    </>
  );
};

export default Routers;
