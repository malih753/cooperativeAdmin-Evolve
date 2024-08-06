import React, { useEffect, useState } from "react";
import { SessionWrap } from "./Sessions.styles";
import SessionHeader from "./SessionHeader";
import UpcomingSession from "./UpcomingSession";
import CompletedSession from "./CompletedSession";
import GroupSession from "./GroupSession";
import { serverDomain } from "../../Constants/serverDomain";

const Sessions = () => {
  const [session, setSession] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${serverDomain}/session/all/fetch`);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data.sessions);
        setSession(data.sessions);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SessionWrap>
      <SessionHeader />
      <UpcomingSession sessions={session} />
      {/* <GroupSession />
      <CompletedSession /> */}
    </SessionWrap>
  );
};

export default Sessions;
