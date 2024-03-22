export async function fetchTicketById(id: string) {
  const res = await fetch(`/api/ticket/${id}`);
  return res.json();
}

export async function updateTicket(id: string, data: any) {
  const res = await fetch(`/api/ticket/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res; 
}


export async function createTicket(data: any) {
  const res = await fetch(`/api/ticket`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}
