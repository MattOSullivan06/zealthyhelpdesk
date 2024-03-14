import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="flex justify-between bg-sky-500 p-4">
      <div className="flex items-center space-x-4 text-white">
        <Link href="/">
          <FontAwesomeIcon icon={faHome}/>
        </Link>
        <Link href="/Ticket/new">
          <FontAwesomeIcon icon={faTicket}/>
        </Link>
      </div>
      <div className="text-white">
        <p className="text-default-text">Username/email?</p>
      </div>
    </nav>
  );
};

export default NavigationBar;
