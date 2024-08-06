import React, { useState, useEffect } from "react";
import { ModalsWrap } from "./Modals.styles";
import back from "../../../assets/session/backarrow.png";
import calendar from "../../../assets/session/calendar.png";
import time from "../../../assets/session/time.png";
import Button from "../../Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import TextField from "../../TextField/TextField";

const Session = ({
  setOpen,
  selectedDate,
  selectedTime,
  click,
  setSelectedSessionTypes,
  setInputFieldData,
}) => {
  const [yearsDropdownOpen, setYearsDropdownOpen] = useState(false);

  const [yearsOptions, setYearsOptions] = useState([
    { label: "1:1 Session", value: "session", checked: false },
    { label: "Group Session", value: "groupSession", checked: false },
    { label: "Upcoming Session", value: "upcomingSession", checked: false },
  ]);

  const handleCheckboxChange = (index, options, setOptions) => {
    const newOptions = [...options];
    newOptions[index].checked = !newOptions[index].checked;
    setOptions(newOptions);
    setSelectedSessionTypes(
      newOptions
        .filter((option) => option.checked)
        .map((option) => option.label)
    );
  };

  const toggleDropdown = (setDropdownOpen) => {
    setDropdownOpen((prevState) => !prevState);
  };

  const getSelectedOptionsText = (options) => {
    return (
      options
        .filter((option) => option.checked)
        .map((option) => option.label)
        .join(", ") || "Select..."
    );
  };

  const handleInputChange = (event) => {
    setInputFieldData(event.target.value);
  };

  useEffect(() => {
    setSelectedSessionTypes(
      yearsOptions
        .filter((option) => option.checked)
        .map((option) => option.label)
    );
  }, [yearsOptions, setSelectedSessionTypes]);

  return (
    <ModalsWrap>
      <div className="backicon" onClick={() => setOpen(false)}>
        <img src={back} alt="back" />
      </div>
      <h2>1:1 Session</h2>
      <div className="textWrap">
        <p>Change Management : Leading Agile Systems Change</p>
        <span>
          <img src={calendar} alt="calendar" />
          {selectedDate.toDateString()}
        </span>
        <span>
          <img src={time} alt="time" />
          {selectedTime}
        </span>
      </div>
      <div className="fieldWrap">
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() => toggleDropdown(setYearsDropdownOpen)}
          >
            {getSelectedOptionsText(yearsOptions)}
            <RiArrowDropDownLine size={24} />
          </div>
          {yearsDropdownOpen && (
            <div className="dropdown">
              {yearsOptions.map((option, index) => (
                <div key={option.value} className="dropdown-option">
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={option.checked}
                    onChange={() =>
                      handleCheckboxChange(index, yearsOptions, setYearsOptions)
                    }
                    id={option.value}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="SessionDay"
          type="text"
          placeholder="Add employee / group"
          name="SessionDay"
          bgClr="transparent"
          onChange={handleInputChange}
        />
      </div>
      <div className="btn">
        <Button width="176px" onClick={click}>
          Schedule
        </Button>
      </div>
    </ModalsWrap>
  );
};

export default Session;
