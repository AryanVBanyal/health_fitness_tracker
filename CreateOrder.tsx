import React, { useState } from "react";
import { createOrder, OrderData } from "../Cart/apiService";
import { useSearchParams } from "react-router-dom";

const CreateOrder: React.FC = () => {
  const [searchParams] = useSearchParams();
  const cartId = searchParams.get("cartId") || "";
  const [paymentMethod, setPaymentMethod] = useState<string>("COD");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [cvv, setCvv] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const orderData: OrderData = {
      cartId,
      paymentMethod,
      cardNumber,
      expiryDate,
      cvv,
    };
    try {
      await createOrder(orderData);
      alert("Order created successfully!");
    } catch {
      alert("Error creating order");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Create Order</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Cart ID:</label>
        <input
          type="text"
          value={cartId}
          readOnly
          className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Payment Method:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="COD">COD</option>
          <option value="Card">Card</option>
        </select>
      </div>
      {paymentMethod === "Card" && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700">Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Expiry Date:</label>
            <input
              type="text"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>
        </>
      )}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Create Order
      </button>
    </form>
  );
};

export default CreateOrder;
