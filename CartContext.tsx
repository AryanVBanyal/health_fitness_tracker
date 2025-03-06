import React, { createContext, useContext, useState } from "react";
import axios from "axios";

interface CartItem {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  updateQuantity: (productId: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const updateQuantity = async (productId: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity } : item
      )
    );

    try {
      await axios.put("http://localhost:5000/api/cart/update-quantity", {
        userId: "USER_ID_HERE", // Replace with actual user ID from auth context
        productId,
        quantity,
      });
    } catch (error) {
      console.error("Error updating cart quantity:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
