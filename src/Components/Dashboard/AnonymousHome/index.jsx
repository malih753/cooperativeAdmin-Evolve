import React from "react";
import Button from "../../Button";
import { IoIosArrowForward } from "react-icons/io";
import { AnalysisWrapper } from "./Anonymous.styles";
import BasicLineChart from "../LineChart";
import BasicPie from "../PieChart";
import PieLabel from "../PieChart";

const AnonymousHome = () => {
  return (
    <AnalysisWrapper>
      <div className="holder">
        <div className="lineChart">
          <div className="flex">
            <div className="text">
              <strong>Anonymous Forum</strong>
            </div>
            <div className="filterWrap">
              <Button>Today</Button>
              <Button type="white">
                Start Date - End Date <IoIosArrowForward />
              </Button>
            </div>
          </div>
          <BasicLineChart />
        </div>
        <div className="barChart">
        <div className="flex">
            <div className="text">
              <strong>Active/Inactive Employee</strong>
            </div>
            <div className="filterWrap">
              <Button>Today</Button>
             
            </div>
          </div>
          <PieLabel />
          <div className="detailChart">
            <div className="textWrap">
              <div className="color"></div>
              <span>Active Employee</span>
            </div>
            <div className="textWrap">
              <div className="color"></div>
              <span>Inactive Employee</span>
            </div>
          </div>
        </div>
      </div>
    </AnalysisWrapper>
  );
};

export default AnonymousHome;
