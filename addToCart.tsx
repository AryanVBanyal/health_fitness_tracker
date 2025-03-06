import React from "react";
import axios from "axios";
import Button from "../../Button/Button";
import { toast } from "react-toastify";

interface AddToCartButtonProps {
  id: string;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ id }) => {
  const handleAddToCart = async () => {
    console.log(id);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/shoppingRoutes/cart",
        {
          productId: id,
          quantity: 1,
        }
      );

      console.log(response.data.cart._id);

      // alert("Item added to cart!");
      toast.success("Item added to cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error("Failed to add item to cart:", error);
      // alert("Could not add item to cart.");
      toast.error("Failed to add item to cart!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return <Button onClick={handleAddToCart} label="Add to Cart" />;
};

export default AddToCartButton;
