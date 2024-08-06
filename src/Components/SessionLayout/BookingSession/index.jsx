import React, { useState } from "react";
import backimg from "../../../assets/support/backArrow.png";
import { useNavigate } from "react-router-dom";
import TextField from "../../TextField/TextField";
import Button from "../../Button";
import { ExperienceWrap } from "./Experience.styles";
import { RiArrowDropDownLine } from "react-icons/ri";
import Modal from "../../Modal";
import thumb from "../../../assets/header/thumb.png";
import calendar from "../../../assets/session/calendar.png";
import time from "../../../assets/session/time.png";
const BookingSession = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const backToSession = () => {
    navigate("/sessions");
  }
  const backToProfile = () => {
    navigate("/sessions/viewSession");
  };
  const openPopup = () => {
    setPopup(true);
  };

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
  };

  const toggleDropdown = (setDropdownOpen, otherDropdownSetOpen) => {
    setDropdownOpen((prevState) => !prevState);
    otherDropdownSetOpen(false);
  };

  const getSelectedOptionsText = (options) => {
    return (
      options
        .filter((option) => option.checked)
        .map((option) => option.label)
        .join(", ") || "Select..."
    );
  };

  return (
    <ExperienceWrap>
      <div className="info" onClick={backToProfile}>
        <img src={backimg} alt="back" />
        <h4 className="heading">Book Group Session</h4>
      </div>
      <label>
      Select Session Type
        <div className="dropdown-container">
          <div
            className="dropdown-header"
            onClick={() =>
              toggleDropdown(setYearsDropdownOpen)
            }
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
      </label>
      <div className="fieldWrap">
        <TextField
          variant="textarea"
          label="Session Name"
          parentClass="textareaHolder"
        />
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="Coach"
          type="text"
          label="Coach"
          name="Coach"
          bgClr="transparent"
        />
      </div>
      <div className="fieldWrap">
        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="SessionDay"
          type="text"
          label="Session Day"
          name="SessionDay"
          bgClr="transparent"
        />

        <TextField
          parentClass="inputHolder"
          className="input-field"
          field_Name="SessionTime"
          type="text"
          label="Session Time"
          name="SessionTime"
          bgClr="transparent"
        />
      </div>
      <div className="btn" onClick={openPopup}>
        <Button width="177px">Book</Button>
      </div>
      {popup && (
        <Modal open={popup} setOpen={setPopup} width="590px">
          <div className="bookedPopup" onClick={backToSession}>
          <div className="popupWrap">
            <div className="thumb">
            <img src={thumb} alt="thumb" />
            </div>
            <strong className="title">Session Booked !</strong>
            <strong className="subTitle">
              Change Management : Leading Agile Systems Change
            </strong>
            <span className="name">By : Surbhi Mehta</span>
            <div className="timeWrap">
              <div className="time">
                <img src={calendar} alt="calendar" />
                April 30, 2024 
              </div>
              <div className="time">
                <img src={time} alt="time" />
                09:00 pm 
              </div>
            </div>
          </div>
          </div>
        </Modal>
      )}
    </ExperienceWrap>
  );
};

export default BookingSession;
