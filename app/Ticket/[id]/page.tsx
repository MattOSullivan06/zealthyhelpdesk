import { NextPageContext } from "next";
import React from "react";

interface TicketProps {
  params: {
    id: string;
  };
}

const Ticket: React.FC<TicketProps> = ({ params }) => {
  return <div>Ticket {params.id}</div>;
};

export default Ticket;
