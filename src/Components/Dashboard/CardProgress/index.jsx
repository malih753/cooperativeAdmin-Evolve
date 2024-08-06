import React, { useState } from "react";
import Button from "../../Button";
import { BsThreeDotsVertical } from "react-icons/bs";
// import { FeedCardWrap } from "../FeedCard/FeedCard.styles";
import imag from "../../../assets/anonymous/post.png";
import KycLevel from "../../KycLevel";
import {
  Container,
  InfoItem,
  Label,
  ProgressWrapper,
  Value,
} from "./CardProgress.styles";
import like from "../../../assets/anonymous/like.png";
import comment from "../../../assets/anonymous/comment.png";
import report from "../../../assets/anonymous/report.png";
import backarrow from "../../../assets/profile/backArrow.png";
import { useNavigate } from "react-router-dom";
import warning from "../../../assets/home/warning.png";
// import axios from "axios";
// import { serverDomain } from "../../../constant/server-domain";

const progress = [
  {
    grade: "I want to move to Europe",
    percent: "50",
    bgClr: "#CCEAFF",
  },
  {
    grade: "I want to move to India",
    percent: "20",
    bgClr: "#D9D9D9",
  },
  {
    grade: "I want to move to Us",
    percent: "30",
    bgClr: "#D9D9D9",
  },
  {
    grade: "Other",
    percent: "10",
    bgClr: "#D9D9D9",
  },
];
const CardProgress = ({ data, setRefresh }) => {
  const navigate = useNavigate();
  const backtoPage = () => {
    navigate("/dashboard");
  };
  // const handleLike = async (id) => {
  //   try {
  //     const res = await axios.put(
  //       `${serverDomain}/forum/${data.id}/toggleLike`,
  //       { userId: data?.userId },
  //       { headers: { "Content-Type": "application/json" } }
  //     );
  //     console.log(res);
  //     setRefresh((prev) => !prev);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <ProgressWrapper>
      <div className="backarrow" onClick={backtoPage}>
        <img src={backarrow} alt="backarrow" />
      </div>
      <div className="post">
        <div className="blogHeader">
          <div className="logo">
            <img src={imag} alt="blog" />
            <div className="titleHolder">
              <h5>Works at TCS</h5>
              <div className="tags">
                <span>#situation #emergency</span>
              </div>
            </div>
          </div>
          <div className="icon">
            <BsThreeDotsVertical />
          </div>
        </div>
        <h4>{data?.question}</h4>
        <div className="progressbar">
          {progress?.map((value, index) => (
            <div className="progressWrap" key={index}>
              <span className="grade">{value.grade}</span>
              <KycLevel level={value.percent} bg={value.bgClr} />

              <strong>{value.percent}%</strong>
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="replyWrap">
            <button className="reply">
              <img src={like} alt="like" />
              225
            </button>
            <button className="reply">
              <img src={comment} alt="comment" />
              26
            </button>
            <button className="reply">
              <img src={report} alt="report" />
              Report
            </button>
          </div>
          <div className="counts">
            <span>
              {data?.likeCount} likes | {data?.reportCount} reports
            </span>
          </div>
        </div>
      </div>
      <div className="warningWrap">
        <img src={warning} alt="warning" />
       <div className="flex">
       <div className="textwrap">
          <span>Post ID: </span>
          <span>GH567654 </span>
        </div>
        <div className="textwrap">
          <span>Post Date: </span>
          <span>01 May 2024 </span>
        </div>
       </div>
       <div className="flex">
       <div className="textwrap">
          <span>Post Time: </span>
          <span>5pm</span>
        </div>
        <div className="textwrap">
          <span>Report Reason: </span>
          <span>False Information</span>
        </div>
       </div>
      </div>
    </ProgressWrapper>
  );
};

export default CardProgress;
