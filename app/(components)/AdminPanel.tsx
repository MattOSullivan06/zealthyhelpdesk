import React from "react";
import TicketCard from "./TicketCard";
import { Ticket } from "../Ticket/[id]/types";

const AdminPanel: React.FC<{ tickets: Ticket[] }> = async (props: {
  tickets: Ticket[];
}) => {
  const tickets = props.tickets;
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mt-6 mb-4">Admin Panel</h1>
      <div className="w-full bg-white-500 rounded-lg p-4 mb-4">
        <div className="grid grid-cols-5 gap-4 text-center">
          <div>Name</div>
          <div>Email</div>
          <div>Title</div>
          <div>Status</div>
        </div>
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
