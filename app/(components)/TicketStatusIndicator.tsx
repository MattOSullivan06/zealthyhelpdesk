import React from 'react';

interface TicketStatusIndicatorProps {
  status: 'New' | 'In Progress' | 'Done' | string; // Assuming status is one of these values
}

const TicketStatusIndicator: React.FC<TicketStatusIndicatorProps> = ({ status }) => {
  let indicatorColor: string;
  let indicatorText: string;

  switch (status) {
    case 'New':
      indicatorColor = 'bg-red-500';
      indicatorText = 'New';
      break;
    case 'In Progress':
      indicatorColor = 'bg-yellow-500';
      indicatorText = 'In Progress';
      break;
    case 'Done':
      indicatorColor = 'bg-gray-500';
      indicatorText = 'Done';
      break;
    default:
      indicatorColor = 'bg-black';
      indicatorText = 'Unknown';
  }

  return (
    <div className={`px-3 py-1 rounded ${indicatorColor} text-white`}>
      {indicatorText}
    </div>
  );
};

export default TicketStatusIndicator;
