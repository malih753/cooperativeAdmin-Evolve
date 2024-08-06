import React from "react";
import Header from "./OtherHeader";
import { MainLayoutSection } from "./SessionLayout.styles";
// import { Outlet } from "react-router-dom";

import Footer from "../Footer/index";
import UpgradeCourse from "./UpgradeCourse";
import TrendingSession from "./TrendingSession";
import BookingSession from "./BookingSession";
const SessionLayout = () => {
  return (
    <MainLayoutSection>
      <div className="mainHeader">
        <Header />
      </div>
      <div className="mainSidebarContent">
        <div className="mainContent">
          <BookingSession />
        </div>
        <div className="rightSideBar">
          <div className="sidebar">
            <TrendingSession />
          </div>
          <div className="sidebar">
            <UpgradeCourse />
          </div>
          <div className="sidebar">
            <Footer />
          </div>
        </div>
      </div>
    </MainLayoutSection>
  );
};

export default SessionLayout;
