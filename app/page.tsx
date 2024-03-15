import db from "../modules/db";
import { revalidatePath } from "next/cache";
import React from "react";
import TicketForm from "./(components)/TicketForm";

export default function Home() {

  return (
    <div className="container mx-auto px-4 py-8">
      <TicketForm />
    </div>
  );
}
