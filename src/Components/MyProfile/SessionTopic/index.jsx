import React from "react";
import { SessionTopicWrap } from "./sessionTopic.styles";
import Button from "../../Button";
import {SessionTopics} from "../../Constant/Data";
const SessionTopic = () => {
  return (
    <SessionTopicWrap>
      <div className="wrapper">
        <h2>Session Topics</h2>
        <div className="cardHolder">
          {SessionTopics.map((val, ind) => (
            <div className="card" key={ind}>
              <figure className="thumb">
                <img src={val.img} alt="imag" />
              </figure>
              <div className="content">
                <strong className="title">{val.title}</strong>
                <Button width="138px">Book Now</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SessionTopicWrap>
  );
};

export default SessionTopic;
