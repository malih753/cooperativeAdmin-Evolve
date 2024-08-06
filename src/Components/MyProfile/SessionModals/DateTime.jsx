import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ModalsWrap ,StyledButton } from "./Modals.styles";
import Button from "../../Button";
import calendar from "../../../assets/session/calendar.png";
import back from "../../../assets/session/backarrow.png";
const TimeSlot = [
  {
    time: "02:15 pm - 03:15 pm",
    bgClr: "var(--gray-50)",
    disable:true,
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
    bgClr: "var(--gray-50)",
    disable:true,
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
    bgClr: "var(--gray-50)",
    disable:true,
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
  {
    time: "02:15 pm - 03:15 pm",
  },
];

const DateTime = ({ setOpen , onSelectTime}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      <ModalsWrap>
        <div className="backicon" onClick={() => setOpen(false)}>
          <img src={back} alt="back" />
        </div>
        <h2>Session Date & Time</h2>

        <span>Select Session Date & Time</span>
        <div className="para">
          <p>Change Management: Leading Agile Systems Change</p>
          <Button type="outline" width="237px" onClick={toggleCalendar}>
            {startDate.toDateString()}
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
        <div className="timeSlots">
          {TimeSlot.map((val, ind) => (
            <div className="time" key={ind}>
              <StyledButton
                type="outline"
                width="206px"
                bgClr={val.bgClr}
                disabled={val.disable}
                onClick={() => onSelectTime(startDate, val.time)}
              >
                {val.time}
              </StyledButton>
            </div>
          ))}
        </div>
      </ModalsWrap>
    </>
  );
};

export default DateTime;
