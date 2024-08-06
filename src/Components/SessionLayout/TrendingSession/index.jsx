import React from "react";
import { TrendingSessionWrap } from "./trending.styles";
import { IoIosArrowForward } from "react-icons/io";
import {TrendingSessionData} from "../../Constant/Data"
const TrendingSession = () => {
  return (
    <TrendingSessionWrap>
     <div className="wrapper">
     <div className="headingWrapper">
        <h5>Upcoming Session</h5>
        <div className="arrowIcon">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="cardHodler">
        {TrendingSessionData.map((value, index) => (
          <div className="card" key={index}>
            <img src={value.img} alt="session" />
            <h5>{value.title}</h5>
          </div>
        ))}
      </div>
     </div>
    </TrendingSessionWrap>
  );
};

export default TrendingSession;
