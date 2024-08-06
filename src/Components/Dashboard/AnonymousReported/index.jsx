import React from "react";
import { ReportedWrap } from "./reported.styles";
import ReportsHeader from "../ReportsHeader";
import Table from "../../Table";
import { reportCol, reportData } from "../TableData";
import { useNavigate } from "react-router-dom";

const AnonymousReported = () => {
  const navigate = useNavigate();
    const handleImageClick = () => {
        navigate("/CardProgress");
    }
  return (
    <ReportedWrap>
      <strong>Anonymous Reported Post</strong>
      <ReportsHeader/>
      <strong>20 Jan 2024</strong>
      <div className="wrapper">
        <strong className="title"> Session Feedback</strong>
        <Table
          columns={reportCol}
          data={reportData}
          border={true}
          onImageClick={handleImageClick}
        />
      </div>
    </ReportedWrap>
  );
};

export default AnonymousReported;
