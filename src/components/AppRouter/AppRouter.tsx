import React, { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./routesList";

const AppRouter: FC = () => {
  const isAuth: boolean = false;
  return (
    <>
      {isAuth ? (
        <>
          <Routes>
            {privateRoutes.map((link) => (
              <Route
                key={link.path}
                path={link.path}
                element={<link.element />}
              />
            ))}
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            {publicRoutes.map((link) => (
              <Route
                key={link.path}
                path={link.path}
                element={<link.element />}
              />
            ))}
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </>
      )}
    </>
  );
};
export default AppRouter;
