import React from "react";
import { Link,NavLink } from "react-router-dom";
import './Style.css';

function Header() {
  return (
    <nav className="shadow-sm bg-gray-100 md:p-7 sticky top-0 md:px-9 border-gray-200 px-2  sm:px-4 py-2.5 rounded ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className=" self-center text-2xl font-bold font-kanit tracking-wider whitespace-nowrap ">
            HINDU News
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-300 rounded-lg bg-slate-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 gap-6">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-800 rounded md:bg-transparent md:p-0 "
                aria-current="page"
              >
               General
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/entertainment"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Entertainment
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/health"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Health
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sports"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Sports
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/business"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Business
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Technology
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
