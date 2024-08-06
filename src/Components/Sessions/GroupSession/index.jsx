import React from "react";
import { GroupWrapper } from "./GroupSession.styles";
import { groupSessionData } from "../../Constant/Data";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import stars from "../../../assets/session/stars.png";
import time from "../../../assets/session/time.png";
import calendar from "../../../assets/session/calendar.png";
import Button from "../../Button"
const GroupSession = () => {
  return (
    <GroupWrapper>
      <div className="wrapper">
        <div className="groupsession">
          <div className="titleHolder">
            <strong className="title">Upcoming Session</strong>
            <Link to="#">
              <span className="view">
                View all <FaAngleRight />
              </span>
            </Link>
          </div>
          <div className="cardHolder">
            {groupSessionData.map((val, ind) => (
              <div className="card" key={ind}>
                <figure className="thumb">
                  <img src={val.img} alt="imag" />
                </figure>
                <div className="content">
                  <strong className="title">{val.title}</strong>

                  <div className="logotext">
                    <strong className="name">{val.name}</strong>
                   
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
                  <div className="btn">
                    <Button type="transparent">View All</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </GroupWrapper>
  );
};

export default GroupSession;
