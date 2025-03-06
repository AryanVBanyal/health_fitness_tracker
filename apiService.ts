import axios from "axios";

const API_URL = "http://localhost:5000/api";

export interface OrderData {
  cartId: string;
  paymentMethod: string;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
}

export const fetchCart = async () => {
  return await axios.get(`${API_URL}/shoppingRoutes/cart`);
};

export const createOrder = async (orderData: OrderData) => {
  return await axios.post(`${API_URL}/orders/orders`, orderData);
};

export const fetchOrders = async () => {
  return await axios.get(`${API_URL}/orders/order`);
};

export const updateOrderStatus = async (orderId: string, status: string) => {
  return await axios.patch(`${API_URL}/orders/${orderId}`, { status });
};
