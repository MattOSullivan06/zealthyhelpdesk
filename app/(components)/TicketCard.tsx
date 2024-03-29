"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Ticket } from "../Ticket/[id]/types";

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard: React.FC<TicketCardProps> = (props: TicketCardProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  const handleButtonClick = () => {
    setIsLoading(true);
  };

  return (
    <tr className="border border-black text-center">
      <td className="border border-black px-4 py-2">
        {props.ticket.firstName} {props.ticket.lastName}
      </td>
      <td className="border border-black px-4 py-2 break-all">
        {props.ticket.email}
      </td>
      <td className="border border-black px-4 py-2 break-all">
        {truncateText(props.ticket.title, 20)}
      </td>
      <td className="border border-black px-4 py-2">{props.ticket.status}</td>
      <td className="border border-black px-4 py-2 hidden md:table-cell break-all">
        {truncateText(props.ticket.description, 150)}
      </td>
      <td className="border border-black px-4 py-2">
        {isLoading ? (
          <button className="bg-gray-400 text-white rounded-lg px-4 py-2 cursor-not-allowed">
            Loading...
          </button>
        ) : (
          <Link href={`/Ticket/${props.ticket.id}`}>
            <button
              onClick={handleButtonClick}
              className="bg-indigo-600 text-white rounded-lg px-4 py-2 hover:bg-indigo-700 transition-colors duration-300 ease-in-out"
            >
              View Ticket
            </button>
          </Link>
        )}
      </td>
    </tr>
  );
};

export default TicketCard;
