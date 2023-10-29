import React from "react";
const DashboardLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="dashboard-layout">{children}</div>
    </React.Fragment>
  );
};
export default DashboardLayout;
