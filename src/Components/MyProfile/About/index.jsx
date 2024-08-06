import React from "react";
import { AboutWrap } from "./About.styles";
import { TbPencil } from "react-icons/tb";
const About = ({coach = {}}) => {
  return (
    <AboutWrap>
      <div className="wrapper">
      <div className="flex">
      <h2>About Coach</h2>
      </div>
      <p>
     {coach?.bio}
      </p>
      </div>
    </AboutWrap>
  );
};

export default About;
