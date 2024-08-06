import React, { useEffect, useState } from "react";
import Button from "../../Button";
import like from "../../../assets/anonymous/like.png";
import comment from "../../../assets/anonymous/comment.png";
import report from "../../../assets/anonymous/report.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FeedCardWrap } from "./FeedCard.styles";
import { anonymousData } from "../../Constant/Data";
import { serverDomain } from "../../../Constants/serverDomain";
import { useAuth } from "../../Context/Context";

const FeedCard = () => {
  const { companyId } = useAuth();
  const [forums, setForums] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);
  const [likeCounts, setLikeCounts] = useState(anonymousData.map(() => 0));
  const [showCommentInputs, setShowCommentInputs] = useState(
    anonymousData.map(() => false)
  );
  const [commentValues, setCommentValues] = useState(
    anonymousData.map(() => "")
  );

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const handleLike = (index) => {
    setLikeCounts((prevCounts) =>
      prevCounts.map((count, i) => (i === index ? count + 1 : count))
    );
  };

  const handleComment = (index) => {
    setShowCommentInputs((prevInputs) =>
      prevInputs.map((input, i) => (i === index ? true : input))
    );
  };

  const handleCommentInputChange = (event, index) => {
    const { value } = event.target;
    setCommentValues((prevValues) =>
      prevValues.map((commentValue, i) => (i === index ? value : commentValue))
    );
  };

  const handleCommentSubmit = (index) => {
    console.log("Comment:", commentValues[index]);
    setShowCommentInputs((prevInputs) =>
      prevInputs.map((input, i) => (i === index ? false : input))
    );
    setCommentValues((prevValues) =>
      prevValues.map((commentValue, i) => (i === index ? "" : commentValue))
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${serverDomain}/forum/anonymouslyPost.fetch/:compnayId`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })()
  }, []);

  return (
    <FeedCardWrap>
      {anonymousData.map((value, index) => (
        <div className="post" key={index}>
          <div className="blogHeader">
            <div className="logo">
              <img src={value.imag} alt="blog" />
              <div className="titleHolder">
                <h5>{value.title}</h5>
                <div className="tags">
                  <span>{value.tags}</span>
                </div>
              </div>
            </div>
            <div className="icon">
              <BsThreeDotsVertical />
            </div>
          </div>
          <div className="para">
            <p>
              {isExpanded
                ? value.para + value.fulPara
                : `${value.para.substring(0, 200)}...`}
              <span onClick={handleToggle}>
                {isExpanded ? "see less" : "see more"}
              </span>
            </p>
          </div>
          <div className="flex">
            <div className="replyWrap">
              <button className="reply" onClick={() => handleLike(index)}>
                <img src={like} alt="like" />
                {likeCounts[index]} {likeCounts[index] === 1 ? "like" : "likes"}
              </button>
              <button className="reply" onClick={() => handleComment(index)}>
                <img src={comment} alt="comment" />
                Comment
              </button>
              <button className="reply">
                <img src={report} alt="report" />
                Report
              </button>
            </div>
            <div className="counts">
              <span>
                {likeCounts[index]} {likeCounts[index] === 1 ? "like" : "likes"}{" "}
                | 0 reports
              </span>
            </div>
          </div>
          {showCommentInputs[index] && (
            <div className="commentInput">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentValues[index]}
                onChange={(event) => handleCommentInputChange(event, index)}
              />
              <button onClick={() => handleCommentSubmit(index)}>
                Comment
              </button>
              <br />
              <span>{commentValues[index]}</span>
            </div>
          )}
        </div>
      ))}
    </FeedCardWrap>
  );
};

export default FeedCard;
