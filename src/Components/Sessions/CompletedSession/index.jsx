import React from "react";
import { SessionWrapper } from "../UpcomingSession/upcomingSession.styles";
import stars from "../../../assets/session/stars.png";
import time from "../../../assets/session/time.png";
import calendar from "../../../assets/session/calendar.png";
import {sessionCompletedCard} from "../../Constant/Data"
const CompletedSession = () => {
  return (
    <SessionWrapper>
      <div className="wrapper">
        <div className="sessionwrap">
          <div className="titleHolder">
            <strong className="title">Completed Session</strong>
          </div>
          <div className="cardHolder">
            {sessionCompletedCard.map((val, ind) => (
              <div className="card" key={ind}>
                <figure className="thumb">
                  <img src={val.img} alt="imag" />
                </figure>
                <div className="content">
                  <strong className="title">
                   {val.title}
                  </strong>
                  <div className="logoWrap">
                    <figure className="logo">
                      <img src={val.logo} alt="logo" />
                    </figure>
                    <div className="logotext">
                      <strong className="name">{val.name}</strong>
                      <span className="designation">{val.designation}</span>
                      <div className="reviewWrap">
                        <figure className="stars">
                          <img src={stars} alt="stars" />
                        </figure>
                        <span className="review">{val.review}</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeWrapper">
                    <div className="date">
                      <figure>
                        <img src={calendar} alt="calendar" />
                      </figure>
                      {val.date}
                    </div>
                    <div className="time">
                      <figure>
                        <img src={time} alt="time" />
                      </figure>
                     {val.time}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SessionWrapper>
  );
};

export default CompletedSession;
