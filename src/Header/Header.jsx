import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-slate-100 mt-5 mx-32 top-0 sticky shadow-md shadow-black rounded-b-md">
      <nav className="px-5 font-bold text-slate-600">
        <div className="flex justify-between items-center mx-auto">
          {/* Logo on the left */}
          <NavLink to={"/"} className="flex items-center">
            <img src="namal logo.png" alt="logo" className="w-16" />
          </NavLink>

          {/* Centered Navigation Links */}
          <ul className="flex space-x-16">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-slate-600"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"about"}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-slate-600"}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"contact"}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-slate-600"}`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"github"}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-slate-600"}`
                }
              >
                Github
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/user"}
                className={({ isActive }) =>
                  `${isActive ? "text-orange-700" : "text-slate-600"}`
                }
              >
                User
              </NavLink>
            </li>
          </ul>

          {/* "Log in" and "Get Started" on the Right */}
          <div className="flex items-center space-x-5">
            <NavLink
              to={"login"}
              className={({ isActive }) =>
                `${isActive ? "text-orange-700" : "text-slate-600"}`
              }
            >
              Log in
            </NavLink>
            <NavLink to={"getstarted"}>
              <button className="bg-orange-700 text-white px-4 py-2 rounded-lg">
                Get started
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
