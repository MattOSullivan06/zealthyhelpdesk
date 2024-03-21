// AdminPanel.tsx
import React from "react";
import TicketCard from "./TicketCard";
import { Ticket } from "../Ticket/[id]/types";

const AdminPanel: React.FC<{ tickets: Ticket[] }> = (props: {
  tickets: Ticket[];
}) => {
  const tickets = props.tickets;

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mt-6 mb-4">Admin Panel</h1>
      <div className="w-full bg-white rounded-lg p-4 mb-4 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border border-black text-center">
              <th className="border border-black px-4 py-2">Name</th>
              <th className="border border-black px-4 py-2">Email</th>
              <th className="border border-black px-4 py-2">Title</th>
              <th className="border border-black px-4 py-2">Status</th>
              <th className="border border-black px-4 py-2 hidden md:table-cell">
                Description
              </th>
              <th className="border border-black px-4 py-2">View Ticket</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
