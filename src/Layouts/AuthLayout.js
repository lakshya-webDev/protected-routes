import React from "react";
import { Outlet } from "react-router-dom";
const AuthLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="auth-layout">
        <Outlet />
        {children}
      </div>
    </React.Fragment>
  );
};
export default AuthLayout;
