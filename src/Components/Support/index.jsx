import React, { useEffect, useState } from "react";
import { SupportWrap } from "./Support.styles";
import Tickets from "./Ticket";
import Issues from "./Issue";
import TicketRaised from "./TicketRaised";
import RaiseTicket from "./TicketRaised/RaiseTicket";
import { serverDomain } from "../../Constants/serverDomain";

const SupportSec = () => {
  const [ticket, setTicket] = useState(false);
  const [raise, setRaise] = useState(false);
  const isOpen = () => {
    setRaise(true);
  };
  const clickHandler = () => {
    setTicket(true);
  };
  const backPage = () => {
    setTicket(false);
    setRaise(false);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${serverDomain}/companyTicket/1/get`);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <SupportWrap>
      {ticket ? (
        <div className="raised">
          <TicketRaised backPage={backPage} />
        </div>
      ) : raise ? (
        <div className="raised">
          <RaiseTicket backPage={backPage} />
        </div>
      ) : (
        <div className="wrapper">
          <div className="activeTicket support">
            <Tickets
              width="186px"
              name="Close Ticket"
              title="Active Tickets"
              click={clickHandler}
            />
          </div>
          <div className="issuesHolder support">
            <Issues click={isOpen} />
          </div>
          <div className="resolveTicke supportt">
            <Tickets
              type="transparent"
              name="Resolved"
              title="Resolved Tickets "
            />
          </div>
        </div>
      )}
    </SupportWrap>
  );
};

export default SupportSec;
