import React, { useEffect } from "react";
import { ViewWrap } from "./View.astyles";

import Accordions from "../../Accordions";
import { items } from "../../Constant/Data";
import Button from "../../Button";
import date from "../../../assets/session/calendar.png";
import time from "../../../assets/session/time.png";
import sessionImg from "../../../assets/session/upcomingSession.png";
import employe from "../../../assets/session/employe.png";
import employes from "../../../assets/session/employes.png";
import { useLocation, useNavigate } from "react-router-dom";
import backarrow from "../../../assets/session/backarrow.png";
import logo from "../../../assets/session/logo.png";
import stars from "../../../assets/session/stars.png";
import { useAuth } from "../../Context/Context";
import { serverDomain } from "../../../Constants/serverDomain";
const ViewSession = () => {
  const [session, setSession] = React.useState({});

  const navigate = useNavigate();
  const { id } = useLocation()?.state;
  const { user } = useAuth();

  const backToPage = () => {
    navigate("/sessions");
  };
  const BookSession = () => {
    navigate("/SessionLayout");
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${serverDomain}/session/${id}/${user}/details`
        );
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const data = await response.json();
        console.log(data);

        setSession(data.data.session);
        // setSession(data.session);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ViewWrap>
      <div className="backarrow" onClick={backToPage}>
        <img src={backarrow} alt="backarrow" />
      </div>
      <div className="view">
        <div className="sessionDetail">
          <div className="textHolder">
            <h2>{session?.title}</h2>
            <div className="logoWrap">
              <figure className="logo">
                <img src={logo} alt="logo" />
              </figure>
              <div className="logotext">
                <strong className="name">
                  By :{" "}
                  {session?.coach?.firstName + " " + session?.coach?.lastName}
                </strong>
                <span className="designation">
                  {session?.coach?.designation}
                </span>

                <figure className="stars">
                  <img src={stars} alt="stars" />
                </figure>
              </div>
            </div>
            <div className="date flex">
              <figure>
                <img src={date} alt="date" />
              </figure>
              <span>{session?.startDate} - {session?.endDate}</span>
            </div>
            <div className="time flex">
              <figure>
                <img src={time} alt="time" />
              </figure>
              <span>{session?.startTime} - {session?.endTime}</span>
            </div>
            <div className="session flex">
              <figure>
                <img src={employes} alt="employes" />
              </figure>
              <span>20 Employees Enrolled</span>
            </div>
            <div className="btns" onClick={BookSession}>
              <Button width="150px">Book Session</Button>
            </div>
          </div>
          <figure className="thumb">
            <img src={`${serverDomain}${session?.image}`} alt="sessionImg" />
          </figure>
        </div>
        <div className="sessionPara">
          <h4>About Session</h4>
          <p>
         {session?.about}
          </p>
        </div>
        <div className="Accordions">
          <h4>Topics</h4>
          <Accordions items={session?.topics} />
        </div>
      </div>
    </ViewWrap>
  );
};

export default ViewSession;
