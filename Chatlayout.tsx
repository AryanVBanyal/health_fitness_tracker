import React from "react";
import { FaSearch } from "react-icons/fa";

function Chatlayout() {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Header */}
        <div className="flex justify-center mt-10 px-4 sm:px-8 md:px-6 ">
          <div className="w-full max-w-4xl bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <h1 className="text-xl md:text-3xl font-bold mb-4 text-center">
              MESSAGES
            </h1>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <input
                type="text"
                className="flex-grow h-12 px-6 rounded-full text-black text-lg w-full md:w-auto"
                placeholder="Search"
              />
              <button className="bg-purple-500 text-white px-5 py-2 rounded-full hover:bg-purple-600 flex items-center justify-center gap-2 whitespace-nowrap">
                <span className="hidden sm:inline md:hidden">
                  <FaSearch />
                </span>
                <span className="hidden md:inline">Search</span>
              </button>
            </div>
          </div>
        </div>

        {/* Chat List */}
        <div className="flex justify-center mt-6 px-4">
          <div className="w-full max-w-4xl bg-gray-800 text-white p-5 rounded-lg shadow-lg">
            <ul className="space-y-4 ps-5">
              {/* Chat List Item */}
              {[
                { name: "Sreekuttan", message: "hi hellooo", time: "3:40" },
                { name: "Jithu", message: "Typing.....", time: "12:10" },
                { name: "Athira", message: "heyyyyyy", time: "8:22" },
                { name: "Christo", message: "Namastee", time: "2:15" },
                { name: "Adarsh", message: "good morning!", time: "6:58" },
              ].map((chat, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-700 pb-3"
                >
                  <div>
                    <h3 className="text-lg md:text-xl font-bold">
                      {chat.name}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {chat.message}
                    </p>
                  </div>
                  <span className="text-sm text-gray-400 mt-2 md:mt-0">
                    {chat.time}
                  </span>
                </li>
              ))}
            </ul>

            {/* Footer Buttons */}
            <div className="flex flex-wrap justify-around gap-4 mt-6">
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
                CHAT ICON
              </button>
              <button className="bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600">
                CALL ICON
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatlayout;
