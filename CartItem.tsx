import React from "react";

interface Product {
  id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
}

interface CartItemType {
  id: string;
  product_id: Product;
  quantity: number;
}

interface CartItemProps {
  cartItem: CartItemType;
  onQuantityChange: (id: string, quantity: number) => void;
  onDelete: (productId: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({
  cartItem,
  onQuantityChange,
  onDelete,
}) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity > 0) {
      onQuantityChange(cartItem.product_id._id, newQuantity);
    }
  };

  const handleDeleteCart = () => {
    onDelete(cartItem.product_id._id);
  };

  return (
    <div className="flex flex-col w-full sm:w-3/4 space-y-4 p-1 sm:space-y-4 sm:p-4">
      <div className="flex w-full max-w-4xl h-fit sm:h-44 rounded-lg shadow-md p-2 sm:p-4 space-x-2 sm:space-x-4 border border-gray-200 bg-white">
        {/* Product Image */}
        <div className="w-20 h-20 sm:w-36 sm:h-36 rounded-lg border border-gray-200  overflow-hidden">
          <img
            src={`/src/assets/shopping/${cartItem.product_id?.image}`}
            alt={cartItem.product_id?.name || "Product Image"}
            className="w-full h-full object-cover  rounded sm:rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start ">
            <span className="w-11/12 text-sm sm:text-lg font-medium line-clamp-1">
              {cartItem.product_id.name}
            </span>
            <button
              onClick={handleDeleteCart}
              className="text-2xl font-bold sm:text-2xl text-gray-500 hover:text-gray-700"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>

          {/* Quantity Controls */}
          <div className="mt-2 sm:mt-2 flex items-center space-x-2">
            <button
              className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
              onClick={() => handleQuantityChange(cartItem.quantity - 1)}
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="px-2">{cartItem.quantity}</span>
            <button
              className="h-8 w-8 flex items-center justify-center rounded border border-gray-300 hover:bg-gray-100"
              onClick={() => handleQuantityChange(cartItem.quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          {/* Pricing */}
          <div className="flex gap-4 items-center">
            <div className="">
              <span className="text-gray-900 text-sm sm:text-lg font-semibold">
                ₹{cartItem.product_id.price.discounted}
              </span>
            </div>
            <div className="">
              <span className="text-gray-500 text-xs sm:text-base line-through">
                ₹{cartItem.product_id.price.original}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
