import React from "react";
import { DashboardWrap } from "./Dashboard.styles";
import AnalysisSession from "./AnalysisSession";
import AnonymousHome from "./AnonymousHome";
import CoachFeedback from "./CoachFeedback";
import AnonymousReported from "./AnonymousReported";
const Dashboard = () => {
  return (
    <DashboardWrap>
      <AnalysisSession />
      <AnonymousHome/>
      <CoachFeedback/>
      <AnonymousReported/>
    </DashboardWrap>
  );
};

export default Dashboard;
