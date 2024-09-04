"use client";
import { useState } from "react";
import { FiSearch, FiBell, FiUser, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md dark:bg-gray-900">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white"> Dashboard</h2>
      </div>

      <div className="flex-1 mx-6 relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        />
        <FiSearch className="absolute left-3 top-3 text-gray-400 dark:text-gray-300" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600">
          <FiBell className="h-6 w-6" />
          <span className="absolute top-0 right-0 block h-2 w-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
        </button>

        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <FiUser className="h-6 w-6" />
            <FiChevronDown className="h-4 w-4" />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 dark:bg-gray-800">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
