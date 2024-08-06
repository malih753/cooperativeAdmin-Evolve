import React, { useState } from "react";
import SearchBar from "../../TextField/SearchBar";
import Button from "../../Button";
import DatePicker from "react-datepicker";
import { FaAngleRight } from "react-icons/fa6";
import { HeaderWrapper } from "./employeeHeader.styles";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "../../Dropdown";
import report from "../../../assets/reports/report.png";
const EmployeeHeader = () => {
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const sessionTypeItems = [
    { label: "All Employee ", link: "/EmployeeProfile" },
    { label: "Activated Employee ", link: "/EmployeeProfile/ActivateEmployee" },
    { label: "Deactivated Employee", link: "/EmployeeProfile/DeactivateEmployee" }, 
  ];

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
      </div>
      <div className="searchbar">
        <SearchBar />
      </div>
      <div className="export">
        <Button width="208px">
          <img src={report} alt="report" />
          Export To Excel
        </Button>
      </div>
    </HeaderWrapper>
  );
};

export default EmployeeHeader;
