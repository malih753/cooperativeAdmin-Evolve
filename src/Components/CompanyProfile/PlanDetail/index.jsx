import React from "react";
import { PlanWrap } from "./PlanDetail.styles";
import backarrow from "../../../assets/support/backArrow.png";
import { useNavigate } from "react-router-dom";
import Table from "../../Table";
import preview from "../../../assets/companyprofile/preview.png";
import { SubColumn, SubRow } from "./Data";
const SubscriptionDetail = () => {
  const columns = [
    { key: "planName", header: "Plan Name/Type" },
    { key: "startDate", header: "Start Date" },
    { key: "endDate", header: "End Date" },
    {
      key: "viewDetails",
      header: "View Details",
      render: (data, row) => (
        <img
          src={data}
          alt="next icon"
          //   onClick={() => handleImageClick(row)}
          style={{ cursor: "pointer" }}
        />
      ),
    },
  ];

  const data = [
    {
      planName: "Gold",
      startDate: "01 Jan 2024",
      endDate: "01 Jan 2025",
      viewDetails:{image: preview},
    },
  ];
  const navigate = useNavigate();
  const backToPage = () => {
    navigate("/companyProfile");
  };
  return (
    <PlanWrap>
      <div className="arrow" onClick={backToPage}>
        <img src={backarrow} alt="arrow" />
      </div>
      <div className="Subscription">
        <div className="wrapper">
          <span className="h2">Subscriptions</span>
          <Table columns={columns} data={data} />
        </div>
      </div>
      <div className="SubscriptionHistory">
        <div className="wrapper">
            <span className="h2">Subscription History</span>
            <Table columns={SubColumn} data={SubRow} />
        </div>
      </div>
    </PlanWrap>
  );
};

export default SubscriptionDetail;
