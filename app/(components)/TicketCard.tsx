import React from "react";
import Link from "next/link";
import { Ticket } from "../Ticket/[id]/types";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = (props: TicketCardProps) => {
  return (
    <div className=" border-black border-2 px-4 grid grid-cols-5 gap-4 text-center py-2">
      <div>{`${props.ticket.firstName} ${props.ticket.lastName}`}</div>
      <div>{props.ticket.email}</div>
      <div>{props.ticket.title}</div>
      <div>{props.ticket.status}</div>
      <Link href={`/Ticket/${props.ticket.id}`}>
        <button className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors duration-300 ease-in-out">
          View Ticket
        </button>
      </Link>
    </div>
  );
};

export default TicketCard;
