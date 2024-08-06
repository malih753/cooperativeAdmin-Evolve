import React, { useState } from "react";
import SearchBar from "../../TextField/SearchBar";
import Button from "../../Button";
import DatePicker from "react-datepicker";
import { FaAngleRight } from "react-icons/fa6";
import { HeaderWrapper } from "./ReportsHeader.styles";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../../Dropdown";
import report from "../../../assets/reports/report.png"
const ReportsHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showDate, setShowDate] = useState(false);
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
  const toggleDate = () => {
    setShowDate(!showDate);
  };

  const handleToggleDropdownTopic = () => {
    setToggleDropdownType(!toggleDropdownType);
  };

  return (
    <HeaderWrapper>
      <div className="sessionHolder">
        
        <Dropdown
          isOpen={toggleDropdownType}
          toggleDropdown={handleToggleDropdownTopic}
          items={sessionTypeItems}
        >
          Filter <FaAngleRight />
        </Dropdown>
        <div className="calendar">
          <Button type="outline" width="150px" onClick={toggleCalendar}>
            From date
            <FaAngleRight />
          </Button>
          {showCalendar && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          )}
        </div>
        <div className="calendar">
          <Button type="outline" width="150px" onClick={toggleDate}>
            To date
            <FaAngleRight />
          </Button>
          {showDate && (
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
            />
          )}
        </div>

      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="export">
        <Button width="208px">
            <img src={report} alt="report" />
            Export To Excel</Button>
      </div>
    </HeaderWrapper>
  );
};

export default ReportsHeader;
