"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import React from "react";

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
    console.log(await res.json());
    if (res.status === 200) {
      router.push("/AdminPanel");
      router.refresh();
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-500">
      <form
        onSubmit={handleSubmit}
        className="w-2/3 max-w-xl bg-gray-200 p-6 rounded-lg shadow-md"
        style={{ height: "66vh" }} // Adjusting height
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          HELP DESK SUBMISSION FORM
        </h1>
        <div className="bg-gray-200 p-4 rounded-lg mb-6">
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2 relative">
              <label className="block">
                <span className="text-gray-700">First Name</span>
                <span className="text-red-500">*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </label>
            </div>
            <div className="w-1/2 relative">
              <label className="block">
                <span className="text-gray-700">Last Name</span>
                <span className="text-red-500">*</span>
                <input
                  required
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                />
              </label>
            </div>
          </div>
          <label className="block mb-4">
            <span className="text-gray-700">Email</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Title</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            />
          </label>
          <label className="block mb-8">
            <span className="text-gray-700">Description</span>
            <span className="text-red-500">*</span>
            <textarea
              required
              onChange={(e) => setdescription(e.target.value)}
              value={description}
              className="mt-1 block w-full border border-black rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              style={{ height: "120px" }}
            />
          </label>
        </div>
        <button
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit Ticket"}
        </button>
      </form>
    </div>
  );
}
