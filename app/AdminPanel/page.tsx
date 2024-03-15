import React from "react";
import AdminPanel from "../(components)/AdminPanel";

import db from "@/modules/db";
// // export const dynamic = "force-dynamic";
// // export const revalidate = 0;
export const fetchCache = "force-no-store";

async function getTickets() {
  const tickets = await db.ticket.findMany();
  return tickets.map((ticket) => {
    return {
      firstName: ticket.firstName,
      lastName: ticket.lastName,
      title: ticket.title,
      description: ticket.description,
      email: ticket.email,
      status: ticket.status,
      id: ticket.id,
    };
  });
}

const AdminPanelPage = async () => {
  const tickets = await getTickets();
  return (
    <div>
      <AdminPanel tickets={tickets} />
    </div>
  );
};

export default AdminPanelPage;
