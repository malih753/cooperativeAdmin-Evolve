import React from "react";
import { SessionWrapper } from "./upcomingSession.styles";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import stars from "../../../assets/session/stars.png";
import time from "../../../assets/session/time.png";
import calendar from "../../../assets/session/calendar.png";
import { sessionCard } from "../../Constant/Data";
import { serverDomain } from "../../../Constants/serverDomain";
const UpcomingSession = ({ sessions }) => {
  const navigate = useNavigate();
  const NextPage = (id) => {
    navigate("/sessions/viewSession", { state: { id } });
  };
  return (
    <SessionWrapper>
      <div className="wrapper">
        <div className="sessionwrap">
          <div className="titleHolder">
            <strong className="title">Upcoming Session</strong>
            <Link to="#">
              <span className="view">
                View all <FaAngleRight />
              </span>
            </Link>
          </div>
          <div className="cardHolder">
            {sessions?.map((val, ind) => (
              <div className="card" key={ind} onClick={() => NextPage(val.id)}>
                <figure className="thumb">
                  <img src={`${serverDomain}${val.image}`} alt="imag" />
                </figure>
                <div className="content">
                  <strong className="title">{val.title}</strong>
                  <div className="logoWrap">
                    <figure className="logo">
                      <img src={sessionCard[0].logo} alt="logo" />
                    </figure>
                    <div className="logotext">
                      <strong className="name">{sessionCard[0].name}</strong>
                      <span className="designation">{val.designation}</span>
                      <div className="reviewWrap">
                        <figure className="stars">
                          <img src={stars} alt="stars" />
                        </figure>
                        <span className="review">{sessionCard[0].review}</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeWrapper">
                    <div className="date">
                      <figure>
                        <img src={calendar} alt="calendar" />
                      </figure>
                      {val.startDate}
                    </div>
                    <div className="time">
                      <figure>
                        <img src={time} alt="time" />
                      </figure>
                      {val.startTime}
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

export default UpcomingSession;
