import React, { useState, useEffect } from "react";
import { fetchOrders, updateOrderStatus } from "../Cart/apiService";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

interface OrderItemType {
  _id: string;
  product_id: Product;
  quantity: number;
  Price: number;
  cart_image: string;
}

interface OrderType {
  _id: string;
  items: OrderItemType[];
  totalPrice: number;
  paymentMethod: string;
  status: string;
  cardDetails?: {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
  };
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllOrders = async () => {
      try {
        setLoading(true);
        const response = await fetchOrders();
        setOrders(response.data);
      } catch (error) {
        setError("Failed to fetch orders.");
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllOrders();
  }, []);

  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === orderId ? { ...order, status: newStatus } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>
      {loading ? (
        <p>Loading orders...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order._id} className="border p-4 mb-4 rounded">
            <h3 className="text-xl font-semibold mb-2">
              Order ID: {order._id}
            </h3>
            <p>Total Price: ₹{order.totalPrice}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Status: {order.status}</p>
            {order.paymentMethod === "Card" && (
              <div>
                <p>Card Number: {order.cardDetails?.cardNumber}</p>
                <p>Expiry Date: {order.cardDetails?.expiryDate}</p>
                <p>CVV: {order.cardDetails?.cvv}</p>
              </div>
            )}
            <div className="mt-4">
              <label className="block text-gray-700">Update Status:</label>
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order._id, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Shipped">Shipped</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Items:</h4>
              {order.items.map((item) => (
                <div key={item._id} className="flex items-center mb-2">
                  <img
                    src={item.cart_image}
                    alt={item.product_id.name}
                    className="w-16 h-16 mr-4"
                  />
                  <div>
                    <p>{item.product_id.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: ₹{item.Price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
