import React, { useState } from "react";
import {
  EnvelopeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import admin from "../assets/admin.jpg";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [mode, setMode] = useState(false);

  return (
    <div className="border-b-2">
      <div className="mx-auto w-[85%] pb-4">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={admin} className="rounded-full w-14" alt="Admin" />
              <h1 className="text-xl font-extrabold">Yagya Prasad Adhikari</h1>
            </div>
            <div className="flex p-3">
              {[EnvelopeIcon, MagnifyingGlassIcon, ChevronDownIcon].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="ring focus:ring-2 mx-1 hover:bg-gray-200 rounded-full w-10 h-10 flex justify-center items-center"
                  >
                    <Icon className="size-6 text-gray-500" />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-between p-3">
            <div className="flex items-center">
              <h1 className="bg-green-400 rounded-full w-10 h-10"></h1>
              <h1 className="bg-green-400 rounded-full w-10 h-10"></h1>
            </div>
            <div className="flex my-2 p-3">
              <button className="bg-blue-600 hover:bg-blue-500 transition-all rounded-full w-32 p-2 text-white flex items-center justify-center">
                <UserPlusIcon className="size-6 text-white mx-1" /> Follow
              </button>
              <div className="hover:bg-blue-50 mx-1 border border-blue-600 rounded-full w-10 h-10 flex justify-center items-center">
                <EnvelopeIcon className="size-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex">
              {["/", "/badges", "/newsletters"].map((path, index) => (
                <NavLink
                  key={index}
                  to={path}
                  className={({ isActive }) =>
                    `mx-4 font-bold ${
                      isActive ? "text-black" : "text-gray-400"
                    }`
                  }
                >
                  {path === "/"
                    ? "Home"
                    : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
