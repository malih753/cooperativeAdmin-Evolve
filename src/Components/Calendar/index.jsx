import React, { useState } from "react";
import { CalendarWrap } from "./Calendar.styles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import CalendarHeader from "./CalendarHeader";
import TimeSlots from "./TimeSlots";

const Calendar = () => {
  return (
    <>
      <CalendarWrap>
        <h4>
          Tuesday, November 30 2024 <FaAngleLeft />
          <FaAngleRight />
        </h4>
        <CalendarHeader />
        <TimeSlots />
      </CalendarWrap>
    </>
  );
};

export default Calendar;
