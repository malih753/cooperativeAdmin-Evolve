import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Title, { ManageTitle } from "../Title";
import { serverDomain } from "../../../Constants/serverDomain";

const localizer = momentLocalizer(moment);

// Get today's date
// const today = new Date();

// const eventss = [
//   {
//     id: 1,
//     title: "Title",
//     start: new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate(),
//       10,
//       0
//     ),
//     end: new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate(),
//       11,
//       0
//     ),
//   },
//   {
//     id: 2,
//     title: "ManageTitle",
//     start: new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate(),
//       5,
//       0
//     ),
//     end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 6, 0),
//   },
//   {
//     id: 3,
//     title: "Event Next Week",
//     start: new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate(),
//       8,
//       0
//     ),
//     end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 0),
//   },
//   {
//     id: 4,
//     title: "Event Next Month",
//     start: new Date(
//       today.getFullYear(),
//       today.getMonth(),
//       today.getDate(),
//       3,
//       0
//     ),
//     end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 4, 0),
//   },
// ];



const CustomEvent = ({ event }) => {
  if (event.title === "Title") {
    return <Title />;
  } else if (event.title === "ManageTitle") {
    return <ManageTitle />;
  } else {
    return <span>{event.title}</span>;
  }
};

const TimeSlots = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  const handleEventClick = (event) => {
    if (event.title === "Title") {
      navigate("/LectureSchedule");
    } else if (event.title === "ManageTitle") {
      navigate("/employee");
    } else {
      navigate("#");
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${serverDomain}/session/all/fetch`);
        const data = await response.json();

        const newEvents = data.sessions.map((session) => {
          const startDateTime = `${session.startDate}T${session.startTime}`;
          const endDateTime = `${session.endDate}T${session.endTime}`;

          return {
            id: session.id,
            title: session.title,
            start: new Date(startDateTime),
            end: new Date(endDateTime),
          };
        });

        setEvents(newEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  console.log(events);

  return (
    <div style={{ height: 800 }}>
      <Calendar
        localizer={localizer}
        events={events}
        views={["day"]}
        defaultView="day"
        defaultDate={new Date()}
        onSelectEvent={handleEventClick}
        components={{
          event: CustomEvent,
        }}
      />
    </div>
  );
};

export default TimeSlots;
