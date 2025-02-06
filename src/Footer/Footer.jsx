import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="grid grid-cols-2 bg-slate-100 border-2 p-10 shadow-md shadow-black mx-32 mt-5 rounded-t-md">
      <div>
        <img src="namal logo.png" alt="logo" className="w-32" />
        <div className="text-slate-600 mt-6">
          &copy; 06-Feb-2025 | All rights reserved by Aqeel Abbas Khan
        </div>
      </div>
      <div>
        <ul className="flex justify-between font-bold">
          <li className="flex flex-col items-center">
            Resources
            <ul>
              <li className="p-2">
                <NavLink to="/" className="text-slate-600 hover:text-black">
                  Home
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink to="/about" className="text-slate-600 hover:text-black">
                  About
                </NavLink>
              </li>
            </ul>
          </li>

          <li className="flex flex-col items-center">
            Follow us
            <ul>
              <li className="p-2">
                <NavLink to="/github" className="text-slate-600 hover:text-black">
                  Github
                </NavLink>
              </li>
              <li className="p-2">
                <a href="https://discord.com" className="text-slate-600 hover:text-black" target="_blank" rel="noopener noreferrer">
                  Discord
                </a>
              </li>
            </ul>
          </li>

          <li className="flex flex-col items-center">
            Legal
            <ul>
              <li className="p-2 text-slate-600">Privacy Policy</li>
              <li className="p-2 text-slate-600">Terms & Conditions</li>
            </ul>
          </li>
        </ul>
        <div className="text-slate-600 mt-10 flex justify-center">
          Find the attached links
        </div>
      </div>
    </footer>
  );
}

export default Footer;
