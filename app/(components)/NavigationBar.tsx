import React from "react";
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NavigationBar: React.FC = () => {
  return (
    <nav className="flex justify-between bg-indigo-600 p-4">
      <div className="flex items-center space-x-4 text-white">
        <Link href="/">
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div className="text-white flex items-center">
        <div className="hidden md:block">
          <Link href="/AdminPanel">
            <button className="flex items-center bg-transparent border-none text-default-text cursor-pointer">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Admin Panel
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <Link href="/AdminPanel">
            <FontAwesomeIcon icon={faUser} className="text-xl cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
