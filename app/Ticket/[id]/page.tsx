"use client"
import { NextPageContext } from "next";
import React from "react";
import TicketForm from "../../(components)/TicketForm";

interface TicketProps {
  params: {
    id: string;
  };
}

const Ticket: React.FC<TicketProps> = ({ params }) => {
  return <div>hello</div>;
};

export default Ticket;
