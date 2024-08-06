import React from "react";
import { SessionTopicWrap } from "./sessionTopic.styles";
import Button from "../../Button";
import {SessionTopics} from "../../Constant/Data";
const TopicsPopup = ({click}) => {
  return (
    <SessionTopicWrap>
      <div className="wrapperr">
        <div className="heading">
        <h2>Session Topics</h2>
        <p>Select Session Topic and book the session</p>
        </div>
        <div className="cardHolder">
          {SessionTopics.map((val, ind) => (
            <div className="card" key={ind}>
              <figure className="thumb">
                <img src={val.img} alt="imag" />
              </figure>
              <div className="content">
                <strong className="title">{val.title}</strong>
                <Button width="138px" onClick={click}>Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SessionTopicWrap>
  );
};

export default TopicsPopup;
