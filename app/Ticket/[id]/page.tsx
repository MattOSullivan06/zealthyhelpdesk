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
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

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
      setModalMessage("Ticket status and response submitted successfully.");
      setModalVisible(true);
      setTimeout(() => {
        router.push("/AdminPanel");
        router.refresh();
      }, 1500);
    } else {
      setModalMessage("Submission failed. Please try again.");
      setModalVisible(true);
    }
    setIsLoading(false);
    console.log(`Would normally send email here with body: ${response}`);
  };

  const handleReturnClick = () => {
    router.push("/AdminPanel");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-500">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 lg:max-w-xl bg-gray-200 p-6 rounded-lg shadow-md my-0 mx-0 md:my-24 md:mx-auto"
      >
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <div className="mb-4 break-all">
            <p className="text-lg text-gray-700">Title: {title}</p>
          </div>
          <div className="mb-4 break-all">
            <p className="text-lg text-gray-700">First Name: {firstName}</p>
          </div>
          <div className="mb-4 break-all">
            <p className="text-lg text-gray-700">Last Name: {lastName}</p>
          </div>
          <div className="mb-4 break-all">
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
              className="mt-1 block w-full border border-transparent rounded-md shadow-sm resize-none min-h-40 max-h-80 bg-gray-200"
            />
          </div>
          <label className="block mb-4">
            <span className="text-lg text-gray-700">Response</span>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="mt-1 block w-full border border-black rounded-md shadow-sm resize-none min-h-32 max-h-80"
            />
          </label>
          <div className="flex flex-col items-start mt-8">
            <label className="text-lg text-gray-700 mb-2">Change Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-black rounded-md shadow-sm px-4 py-2 mb-4, bg-white"
            >
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
            <button
              type="button"
              onClick={handleReturnClick}
              className={`mt-4 px-8 py-4 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 w-full ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Return to Admin Panel
            </button>
          </div>
        </div>
      </form>
      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">{modalMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}
