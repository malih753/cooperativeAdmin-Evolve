import React, { useState } from "react";
import SearchBar from "../../TextField/SearchBar";
import Button from "../../Button";
import { FaAngleRight } from "react-icons/fa6";
import { HeaderWrapper } from "./ReportsHeader.styles";
import Dropdown from "../../Dropdown";
const SessionHeader = () => {
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const sessionTypeItems = [
    { label: "All Session", link: "#" },
    { label: "Group Session", link: "#" },
    { label: "1:1 Session", link: "#" },
    { label: "Completed Session", link: "#" },
    { label: "Date", link: "#" },
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
      
    </HeaderWrapper>
  );
};

export default SessionHeader;
