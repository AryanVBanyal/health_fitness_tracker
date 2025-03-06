import React from "react";

const Input = ({ placeholder, type }) => {
   return (
      <>
         <input
            type={type}
            className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder={placeholder}
         />
      </>
   );
};

export default Input;
