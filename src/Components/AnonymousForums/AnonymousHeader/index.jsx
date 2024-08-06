import React, { useState } from "react";
import SearchBar from "../../TextField/SearchBar";
import Button from "../../Button";
import { FaAngleRight } from "react-icons/fa6";
import { HeaderWrapper } from "./ReportsHeader.styles";
import Dropdown from "../../Dropdown";
const AnonymousHeader = () => {
  const [toggleDropdownType, setToggleDropdownType] = useState(false);
  const sessionTypeItems = [
    { label: "Discussion", link: "#" },
    { label: "Post", link: "#" },
    { label: "Polls", link: "#" },
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

export default AnonymousHeader;
