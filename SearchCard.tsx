import React from "react";
import { IoIosStar } from "react-icons/io";
import AddToCartButton from "./addToCart";

interface SearchCardProps {
  id: string;
  name: string;
  price: {
    original: number;
    discounted: number;
  };
  image: string;
  rating: number;
}

const SearchCard: React.FC<SearchCardProps> = ({
  id,
  name,
  price,
  image,
  rating,
}) => {
  const handleProduct = () => {
    console.log("Product clicked:", id);
    // You can add navigation logic here if needed
  };

  return (
    <div className="flex flex-col rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-200 w-60 p-5 m-2">
      <div onClick={handleProduct}>
        <div className="relative w-full h-60">
          <img
            src={`src/assets/shopping/${image}`}
            alt={name}
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="absolute flex bottom-2 right-1 text-sm bg-white text-black rounded-lg px-2 py-1 hover:bg-primary-dark hover:text-white">
            {rating} <IoIosStar />
          </span>
        </div>
        <span className="font-bold text-lg text-gray-800 truncate px-2">
          {name}
        </span>
        <div className="flex gap-5 items-center px-2 my-2">
          <span className="text-lg text-primary-dark">₹{price.discounted}</span>
          <span className="text-sm text-gray-500 line-through">
            ₹{price.original}
          </span>
        </div>
      </div>
      <AddToCartButton id={id} />
    </div>
  );
};

export default SearchCard;
