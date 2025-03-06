import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

interface CartItemType {
  _id: string;
  product_id: Product;
  quantity: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cartId, setCartId] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "http://localhost:5000/api/shoppingRoutes/cart/item"
        );
        const cart = response.data;
        setCartId(cart._id);
        setCartItems(
          cart.items.filter((item: CartItemType) => item.product_id !== null)
        );
      } catch (error) {
        setError("Failed to fetch cart items.");
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCartItems();
  }, []);

  const handleQuantityChange = async (
    productId: string,
    newQuantity: number
  ) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/shoppingRoutes/cart/item/update/${productId}`,
        { quantity: newQuantity }
      );

      if (response.status !== 200) throw new Error("Failed to update quantity");

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.product_id._id === productId
            ? { ...item, quantity: Math.max(1, newQuantity) }
            : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleDeleteItem = async (productId: string) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/shoppingRoutes/cart/item/delete/${productId}`
      );

      setCartItems((prevItems) =>
        prevItems.filter((item) => item.product_id._id !== productId)
      );
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const totalMRP = cartItems.reduce(
    (acc, item) => acc + (item.product_id.price.original || 0) * item.quantity,
    0
  );

  const totalDiscount = cartItems.reduce(
    (acc, item) =>
      acc +
      ((item.product_id.price.original || 0) -
        (item.product_id.price.discounted || 0)) *
        item.quantity,
    0
  );

  const totalPayable = totalMRP - totalDiscount;

  const handleConfirmOrder = () => {
    navigate(`/orders/create?cartId=${cartId}`);
  };

  return (
    <div className="flex flex-col px-4 md:px-24 sm:flex-row">
      <div className="flex-grow">
        {loading ? (
          <p>Loading cart...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.id}
              cartItem={item}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDeleteItem}
            />
          ))
        )}
      </div>
      <CartTotal
        cartId={cartId}
        totalMRP={totalMRP}
        totalDiscount={totalDiscount}
        totalPayable={totalPayable}
      />
    </div>
  );
};

export default Cart;
