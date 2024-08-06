import React, { useEffect, useState } from "react";
import { ProfileWrapper } from "./Profile.styles";
import Profile from "./Profile";
import Rating from "./Rating";
import About from "./About";
import Skills from "./Skills";
import Analysis from "./Analysis";
import Education from "./Education";
import { Educationdata, Experiencedata } from "../Constant/Data";
import Certificate from "./Certificate";
import UpcomingSession from "../Sessions/UpcomingSession";
import CompletedSession from "../Sessions/CompletedSession";
import SessionTopic from "./SessionTopic";
import Progressbar from "./Progressbar";
import { useLocation } from "react-router-dom";
import { serverDomain } from "../../Constants/serverDomain";
const MyProfile = () => {
  const { id } = useLocation()?.state;
  const [coach, setCoach] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${serverDomain}/coach/${id}`);
        const data = await res.json();
        console.log(data);
        setCoach(data.coach);

      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <ProfileWrapper>
      <div className="proflewrap">
        <Profile coach={coach} />
        <SessionTopic />
        <About coach={coach} />
        <Analysis />
        <Skills coach={coach}/>
        <Education data={coach?.coachingExperience} />
        <Education data={coach?.educationDetails} />
        <Certificate data={coach}/>
        <UpcomingSession />
        <CompletedSession />
        <div className="flexwrap">
          <Rating />
          <Progressbar />
        </div>
      </div>
    </ProfileWrapper>
  );
};

export default MyProfile;
