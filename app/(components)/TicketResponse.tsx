import React from "react";

interface TicketResponseProps {
  ticketId: string;
  status: string;
  description: string;
  onResponse: (ticketId: string, response: string) => void;
  onUpdateStatus: (ticketId: string, status: string) => void;
}

const TicketResponse: React.FC<TicketResponseProps> = ({
  ticketId,
  status,
  description,
  onResponse,
  onUpdateStatus,
}) => {
  const handleResponse = () => {
    // Here you would send the response via email, for now, let's log it
    console.log(
      `Would normally send email for ticket ${ticketId} with response: ${description}`
    );
  };

  const handleChangeStatus = (newStatus: string) => {
    onUpdateStatus(ticketId, newStatus);
  };

  return (
    <div className="ticket-response">
      <h2>Ticket {ticketId}</h2>
      <p>Status: {status}</p>
      <p>Description: {description}</p>
      <textarea placeholder="Enter your response..." />
      <button onClick={handleResponse}>Submit Response</button>
      <div className="status-buttons">
        <button onClick={() => handleChangeStatus("New")}>Mark as New</button>
        <button onClick={() => handleChangeStatus("In Progress")}>
          Mark as In Progress
        </button>
        <button onClick={() => handleChangeStatus("Resolved")}>
          Mark as Resolved
        </button>
      </div>
    </div>
  );
};

export default TicketResponse;
