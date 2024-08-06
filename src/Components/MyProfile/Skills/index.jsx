import React from "react";
import { SkillsWrap } from "./Skills.styles";
const Skills = ({ coach = {} }) => {
  return (
    <SkillsWrap>
      <div className="wrapper">
        <div className="flexwrap">
          <h2>Skills</h2>
        </div>
        <div className="skillsHold">
          <div className="flex">
            <h5>Primary</h5>
            <div className="skill">
              {coach?.primaryTrainingTopic?.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </div>
          </div>
          <div className="flex">
            <h5>Secondary</h5>
            <div className="skill">
              {coach?.secondaryTrainingTopic?.map((value, index) => (
                <span key={index}>{value}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkillsWrap>
  );
};

export default Skills;
