import React from "react";
import style from "./Chat.module.css";
function Doctorlist() {
  return (
    <>
      <div className="bg-white">
        <h3 className="font-bebas font-medium text-2xl sm:text-4xl md:text-5xl text-center pt-16">
          PHYSICIAN SPECIALIST
        </h3>
        <div className=" mt-5 grid w-full gap-6 lg:grid-cols-2  px-4 py-10">
          {/* Specialist 1 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              PEDIATRICIAN
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82  h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 2 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              NEUROLOGIST
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82  h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 3 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              DERMATOLOGIST
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82  h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 4 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              PSYCHIATRIST
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82  h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 5 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              CARDIOLOGIST
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82  h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
          {/* Specialist 6 */}
          <div className=" relative max-w-xs w-full h-96 sm:h-[500px] mx-auto  bg-cover bg-center text-center border-2 border-gray-400 opacity-90 hover:scale-105 transition-transform duration-500">
            <h3 className="  font-serif text-2xl sm:text-3xl md:text-4xl font-impact text-dark pt-10">
              NEPHROLOGIST
            </h3>
            <button className=" absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-blue-300 rounded-full w-3/4 sm:w-2/3 lg:w-82 h-12 text-lg sm:text-xl md:text-2xl flex items-center justify-center hover:bg-purple-400">
              APPOINTMENTS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Doctorlist;
