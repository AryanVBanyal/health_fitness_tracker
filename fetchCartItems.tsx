import axios from "axios";

interface Product {
  id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

export interface CartItemType {
  id: string;
  product_id: Product;
  quantity: number;
}

interface CartType {
  _id: string;
  items: CartItemType[];
}

export const fetchCartItems = async (): Promise<CartType> => {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/shoppingRoutes/cart/item"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cart items:", error);
    throw error; // This will be caught in `getCartItems`
  }
};
