import React from "react";
import { ProgressWrap } from "./Progress.styles";
import stars from "../../../assets/session/stars.png";
import KycLevel from "../../KycLevel";
const progressData = [
  {
    grade: "5",
    percent: "80",
  },
  {
    grade: "4",
    percent: "40",
  },
  {
    grade: "3",
    percent: "30",
  },
  {
    grade: "2",
    percent: "10",
  },
  {
    grade: "1",
    percent: "20",
  },
];
const Progressbar = () => {
  return (
    <ProgressWrap>
      <div className="reviews">
        <strong>4.5</strong>
        <img src={stars} alt="star" />
        <span>2,256,896</span>
      </div>
      <div className="progressWrap">
        {progressData.map((val, ind) => (
          <div className="progressholder" key={ind}>
            <h3>{val.grade}</h3>
            <KycLevel level={val.percent} bg="#4285F4" height="8px"/>
          </div>
        ))}
      </div>
    </ProgressWrap>
  );
};

export default Progressbar;
