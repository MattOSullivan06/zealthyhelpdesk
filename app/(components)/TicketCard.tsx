import React from "react";
import TicketDeletion from "./TicketDeletion";
import TicketStatusIndicator from "./TicketStatusIndicator";

interface TicketCardProps {
  status: "New" | "In Progress" | "Done" | string; // Assuming status is one of these values
}

const TicketCard: React.FC<TicketCardProps> = ({ status }) => {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <div className="ml-auto">
          <TicketDeletion />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">ticket description</p>

      <div className="ml-auto flex items-end">
        <TicketStatusIndicator status={status} />
      </div>
    </div>
  );
};

export default TicketCard;
