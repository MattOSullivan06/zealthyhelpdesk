"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const TicketForm: React.FC = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const newTicket = {
      title,
      description,
      firstName,
      lastName,
      email,
      status: "New",
    };

    const res = await fetch(`/api/ticket`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTicket),
    });

    if (res.status === 200) {
      router.push("/AdminPanel");
      router.refresh();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-500">
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-2/3 max-w-xl bg-gray-200 p-6 rounded-lg shadow-md mt-24 mb-24"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          HELP DESK SUBMISSION FORM
        </h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-4">
          <div className="flex flex-col space-y-4 mb-4">
            <div>
              <label className="block text-lg">
                <span className="text-gray-700">First Name</span>
                <span className="text-red-500">*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm"
                />
              </label>
            </div>
            <div>
              <label className="block text-lg">
                <span className="text-gray-700">Last Name</span>
                <span className="text-red-500">*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm"
                />
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-4 text-lg">
              <span className="text-gray-700">Email</span>
              <span className="text-red-500">*</span>
              <input
                required
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="mt-1 block w-full border border-black rounded-md shadow-sm"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4 text-lg">
              <span className="text-gray-700">Title</span>
              <span className="text-red-500">*</span>
              <input
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="mt-1 block w-full border border-black rounded-md shadow-sm"
              />
            </label>
          </div>
          <div>
            <label className="block mb-4 text-lg">
              <span className="text-gray-700">Description</span>
              <span className="text-red-500">*</span>
              <textarea
                required
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="mt-1 block w-full border border-black rounded-md shadow-sm h-48"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-4 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-8" // Adjusted margin
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Ticket"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
