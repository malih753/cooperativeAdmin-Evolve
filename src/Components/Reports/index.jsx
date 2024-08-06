import React from "react";
import { Outlet } from "react-router-dom";
import { ReportWrap } from "./Reports.styles";
import ReportsHeader from "./ReportsHeader";

const Reports = () => {
  return (
    <ReportWrap>
      <div className="header">
        <ReportsHeader />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </ReportWrap>
  );
};

export default Reports;
