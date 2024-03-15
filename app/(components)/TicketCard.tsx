import React from "react";
import Link from "next/link";

const TicketCard: React.FC = () => {
  const placeholderTicket = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    title: "Fix login issue",
    status: "New",
  };

  return (
    <div className=" border-black border-2 px-4 grid grid-cols-5 gap-4 text-center py-2">
      <div>{`${placeholderTicket.firstName} ${placeholderTicket.lastName}`}</div>
      <div>{placeholderTicket.email}</div>
      <div>{placeholderTicket.title}</div>
      <div>{placeholderTicket.status}</div>
      <Link href="/Ticket">
        <button className="bg-sky-500 text-white rounded-lg px-4 py-2 hover:bg-sky-600 transition-colors duration-300 ease-in-out">
          View Ticket
        </button>
      </Link>
    </div>
  );
};

export default TicketCard;
