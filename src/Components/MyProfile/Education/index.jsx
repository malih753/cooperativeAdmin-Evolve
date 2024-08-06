import React from "react";
import { EdcuationWrap } from "./Education.styles";
import educationimg from "../../../assets/profile/education.png";
const Education = ({ data }) => {
  return (
    <EdcuationWrap>
      <div className="wrapper">
        {data?.map((val, ind) => (
          <div key={ind}>
            <div className="flexwrap">
              <h2>{val?.maintitle}</h2>
            </div>
            <div className="flex">
              <figure>
                <img src={educationimg} alt="education" />
              </figure>
              <div className="text">
                <h4>{val?.title || val?.degree}</h4>
                <p>{val?.description}</p>
                <span>{val?.grade}</span>
                <br />
                <span>{val?.yearsOfExperience?.replace("To", "-") || ""}</span>
                <span>{val?.startDate + " - " + val?.endDate}</span>
                <br />
                <span>{val?.address}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </EdcuationWrap>
  );
};

export default Education;
