import db from "../modules/db";
import { revalidatePath } from "next/cache";
import React from "react";
import TicketForm from "./(components)/TicketForm";

export default function Home() {
  const handleSubmitTicket = async (formData) => {
    console.log("Submitted ticket data:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <TicketForm />
    </div>
  );
}
