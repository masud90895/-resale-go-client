import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <header aria-label="Site Header" className="bg-gray-200">
      <div className="mx-auto  px-4 sm:px-6 lg:px-[100px]">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block" to="..//">
             <h1 className="text-3xl font-bold font-serif text-[#e76f51]"> Resale-Go</h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Site Nav" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="../home"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="../about"
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="../appointment"
                  >
                    Appointment
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="..//dashboard"
                  >
                    Dashboard
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="../contact"
                  >
                    Contact Us
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `text-gray-700 transition hover:border-b-2  ${
                        isActive
                          ? "bg-gradient-to-r from-[#e76f51] to-[#e76f51] text-gray-100 py-3 px-4 rounded-lg"
                          : "hover:border-[#e76f51]"
                      }`
                    }
                    to="../blog"
                  >
                    Blog
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              {/* <div className="sm:flex sm:gap-4">
                {user ? (
                  <button
                    onClick={logOutUser}
                    className="rounded-md border border-[#e76f51] hover:bg-gradient-to-r from-[#e76f51] to-[#e76f51]  px-5 py-2.5 text-sm font-medium hover:text-white shadow"
                  >
                    Logout
                  </button>
                ) : (
                  <NavLink
                    className="rounded-md border border-[#e76f51] hover:bg-gradient-to-r from-[#e76f51] to-[#e76f51]  px-5 py-2.5 text-sm font-medium hover:text-white shadow"
                    to="../login"
                  >
                    Login
                  </NavLink>
                )}
              </div> */}

              <div className="block md:hidden">
                <button
                  onClick={() => setHidden(!hidden)}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col md:hidden shadow-lg border-2 border-[#e76f51] rounded-lg gap-2 p-4 ${
            hidden ? "hidden" : "block"
          }`}
        >
          <Link to="../home">home</Link>
          <Link to="../about">About</Link>
          <Link to="../appointment">Appointment</Link>
          <Link to="../dashboard">Dashboard</Link>
          <Link to="../contact">Contact Us</Link>
          <Link to="../Blog">Blog</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
