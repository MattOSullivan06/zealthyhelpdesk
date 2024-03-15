"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TicketResponse({ params }: { params: { id: string } }) {
  const router = useRouter();

  const [status, setStatus] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      await fetch(`/api/ticket/${params.id}`)
        .then(async (res) => {
          return await res.json();
        })
        .then(async (json) => {
          setStatus(json.ticket.status);
          setTitle(json.ticket.title);
          setDescription(json.ticket.description);
          setFirstName(json.ticket.firstName);
          setLastName(json.ticket.lastName);
          setEmail(json.ticket.email);
          if (json.ticket.response != null) {
            setResponse(json.ticket.response);
          }
        });
    }
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await fetch(`/api/ticket/${params.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ response, status }),
    });
    if (res.status === 200) {
      router.push("/AdminPanel");
      router.refresh();
    }
    setIsLoading(false);
    console.log(`Would normally send email here with body: ${response}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-500">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 max-w-xl bg-gray-200 p-6 rounded-lg shadow-md"
        style={{ marginTop: "10vh", marginBottom: "10vh" }}
      >
        <h1 className="text-3xl font-bold mb-6 text-center">{title}</h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <div className="mb-4">
            <p className="text-lg text-gray-700">First Name: {firstName}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Last Name: {lastName}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Email: {email}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Status: {status}</p>
          </div>
          <div className="mb-4">
            <p className="text-lg text-gray-700">Description:</p>
            <textarea
              value={description}
              readOnly
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 resize-none"
              style={{ minHeight: "150px", maxHeight: "300px" }}
            />
          </div>
          <label className="block mb-4">
            <span className="text-lg text-gray-700">Response</span>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 resize-none"
              style={{ minHeight: "150px", maxHeight: "300px" }}
            />
          </label>
          <div className="flex flex-col items-start mt-8">
            <label className="text-lg text-gray-700 mb-2">Change Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 px-4 py-2 mb-4, bg-white"            >
              <option value="New">New</option>
              <option value="In Progress">In Progress</option>
              <option value="Resolved">Resolved</option>
            </select>
            <button
              type="submit"
              className={`px-8 py-4 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 w-full mt-8 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Response"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
