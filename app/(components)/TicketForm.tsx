"use client";
import React, { useState, FormEvent } from "react";
import { createTicket } from "../../utils/api";

const TicketForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

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

    try {
      const ticketData = await createTicket(newTicket);

      setModalMessage("Your Ticket Has Been Received!");
      setModalVisible(true);
      resetForm();
    } catch (error) {
      setModalMessage("Submission failed. Please try again.");
      setModalVisible(true);
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    maxLength: number
  ) => {
    const { value } = e.target;
    if (value.length <= maxLength) {
      setter(value);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-0">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-gray-200 p-6 rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          HELP DESK SUBMISSION FORM
        </h1>
        <div className="p-4 rounded-lg mb-4">
          <label className="block mb-4 text-lg">
            <span className="text-gray-700">First Name</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="text"
              onChange={(e) => handleInputChange(e, setFirstName, 25)}
              value={firstName}
              maxLength={25}
              className="mt-1 block w-full border border-black rounded-md shadow-sm"
            />
          </label>

          <label className="block mb-4 text-lg">
            <span className="text-gray-700">Last Name</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="text"
              onChange={(e) => handleInputChange(e, setLastName, 25)}
              value={lastName}
              maxLength={25}
              className="mt-1 block w-full border border-black rounded-md shadow-sm"
            />
          </label>

          <label className="block mb-4 text-lg">
            <span className="text-gray-700">Email</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="email"
              onChange={(e) => handleInputChange(e, setEmail, 254)}
              value={email}
              maxLength={254}
              className="mt-1 block w-full border border-black rounded-md shadow-sm"
            />
          </label>

          <label className="block mb-4 text-lg">
            <span className="text-gray-700">Title</span>
            <span className="text-red-500">*</span>
            <input
              required
              type="text"
              onChange={(e) => handleInputChange(e, setTitle, 50)}
              value={title}
              maxLength={75}
              className="mt-1 block w-full border border-black rounded-md shadow-sm"
            />
          </label>

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

          <button
            type="submit"
            className="w-full px-4 py-4 text-white bg-indigo-600 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 mt-8"
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Submit Ticket"}
          </button>
        </div>
      </form>

      {modalVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg">{modalMessage}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketForm;
