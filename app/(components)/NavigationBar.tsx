import React from "react";
import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-sky-500 p-4">
      <div className="flex items-center space-x-4 text-white">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div className="text-white">
        <Link href="/AdminPanel">
          <p className="text-default-text">Admin Panel</p>
        </Link>
      </div>
    </nav>
  );
};

export default NavigationBar;
