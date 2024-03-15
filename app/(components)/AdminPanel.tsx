import React from "react";
import TicketCard from "./TicketCard";

const AdminPanel: React.FC = () => {
  // Placeholder tickets data
  const placeholderTickets = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      title: "Fix login issue",
      status: "New",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      title: "Update homepage",
      status: "In Progress",
    },
    {
      id: "3",
      firstName: "Alice",
      lastName: "Johnson",
      title: "Design new feature",
      status: "Done",
    },
  ];

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
        {placeholderTickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
