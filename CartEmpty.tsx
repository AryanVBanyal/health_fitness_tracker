import React from "react";
import { useNavigate } from "react-router-dom";

const CartEmpty = () => {
  const navigate = useNavigate();
  const BackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <img
        src="src/assets/shopping/empty-cart.webp"
        alt="oops"
        className="w-32 h-32 sm:w-48 sm:h-48 mb-4"
      />
      <h3 className="text-lg sm:text-xl font-semibold mb-2.5">
        Your Cart is empty!
      </h3>
      <p className="mb-5 text-center text-base sm:text-lg">
        Browse from your recently viewed or explore from categories
      </p>
      <button
        onClick={BackToHome}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 sm:px-6 sm:py-3"
      >
        Back To Homepage
      </button>
    </div>
  );
};

export default CartEmpty;
