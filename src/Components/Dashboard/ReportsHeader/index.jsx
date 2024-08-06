import React, { useState } from "react";
import SearchBar from "../../TextField/SearchBar";
import Button from "../../Button";
import DatePicker from "react-datepicker";
import { FaAngleRight } from "react-icons/fa6";
import { HeaderWrapper } from "./ReportsHeader.styles";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../../Dropdown";
import calendar from "../../../assets/session/calendar.png"
const ReportsHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const sessionTypeItems = [
    { label: "Session Analysis", link: "/reports" },
    { label: "Anonymous Forum", link: "/reports/Anonymousforum" },
    { label: "Active/Inactive Employee", link: "/reports/ActiveInActive" },
    { label: "Coach Feedback Analysis", link: "/reports/CoachFeedback" },
    { label: "Session Feedback Analysis", link: "/reports/SessionFeedback" },
    { label: "Coach Report", link: "/reports/CoachReport" },
  ];
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const handleToggleDropdownTopic = () => {
    setToggleDropdownType(!toggleDropdownType);
  };

  return (
    <HeaderWrapper>
      <div className="sessionHolder">
       <div className="dropdown">
       <Dropdown
          isOpen={toggleDropdownType}
          toggleDropdown={handleToggleDropdownTopic}
          items={sessionTypeItems}
        >
          Filter <FaAngleRight />
        </Dropdown>
       </div>
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="calendar">
        <Button type="outline" width="150px" onClick={toggleCalendar}>
         <img src={calendar} alt="calendar" />
        </Button>
        {showCalendar && (
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            inline
          />
        )}
      </div>
    </HeaderWrapper>
  );
};

export default ReportsHeader;
