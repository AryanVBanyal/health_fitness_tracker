import React from "react";
import CartEmpty from "./CartEmpty";

const CartSection = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-bold mb-4">Your Shopping Cart</h1>
      <CartEmpty />
    </div>
  );
};

export default CartSection;
