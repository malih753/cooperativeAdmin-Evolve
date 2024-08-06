import React, { useState } from "react";
import { CoachWrap } from "./CoachFeedback.styles";
import Button from "../../Button";
import calendar from "../../../assets/session/calendar.png";
import { FaAngleRight } from "react-icons/fa6";
import Dropdown from "../../Dropdown";
import BarLabel from "../BarChart";
const CoachFeedback = () => {
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const sessionTypeItems = [
    { label: "All Employee ", link: "/EmployeeProfile" },
    { label: "Activated Employee ", link: "/EmployeeProfile/ActivateEmployee" },
    {
      label: "Deactivated Employee",
      link: "/EmployeeProfile/DeactivateEmployee",
    },
  ];

  const handleToggleDropdownTopic = () => {
    setToggleDropdownType(!toggleDropdownType);
  };
  return (
    <CoachWrap>
      <div className="flex">
        <div className="text">
          <strong>Coach Feedback Analysis</strong>
          <h4>Talent Management | 20 Jan 2024</h4>
        </div>
        <div className="filterWrap">
          <div className="sessionHolder">
            <Dropdown
              isOpen={toggleDropdownType}
              toggleDropdown={handleToggleDropdownTopic}
              items={sessionTypeItems}
            >
              Filter <FaAngleRight />
            </Dropdown>
          </div>
          <Button width="124px">Day</Button>
          <Button type="outline" width="124px">
            Week
          </Button>
          <Button type="outline" width="70px">
            <img src={calendar} alt="calendar" />
          </Button>
        </div>
        <div className="lineChart">
         <BarLabel/>
        </div>
      </div>
    </CoachWrap>
  );
};

export default CoachFeedback;
