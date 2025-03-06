import React from "react";
import { IoIosStar } from "react-icons/io";
import Button from "../../Button/Button";
import { useNavigate } from "react-router-dom";
import AddToCartButton from "./addToCart";
interface Product {
   id: string;
   name: string;
   image: string;
   price: {
      original: number;
      discounted: number;
   };
   rating: number;
}

const ProductCard: React.FC<{ product: Product; id: string }> = ({
   product,
   id,
}) => {
   // key=id
   const navigate = useNavigate();
   const handleProduct = async () => {
      navigate(`/shopping/${id}`);
      console.log(id);
   };
   const discount = Math.round(
      (product.price.discounted / product.price.original) * 100
   );
   return (
      <div className=" flex flex-col rounded-lg overflow-hidden hover:scale-105 transform transition-transform duration-200 w-40 md:w-60 mx-auto m-2">
         <div onClick={handleProduct}>
            <div className="relative w-full h-40 md:h-60">
               <img
                  src={`src/assets/shopping/${product.image}`}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
               />
               <span className="absolute flex bottom-2 right-1 text-sm bg-white text-black rounded-lg px-2 py-1 hover:bg-primary-dark hover:text-white">
                  {product.rating} <IoIosStar />
               </span>
            </div>
            <span className="font-bold text-lg text-gray-800 truncate px-2">
               {product.name}
            </span>
            <div className="flex gap-5 items-center  py-1 md:py-2 px-0 md:px-2 ">
               <span className="text-lg text-primary-dark">
                  ₹{product.price.discounted}
               </span>
               <span className="text-sm text-gray-500 line-through">
                  ₹{product.price.original}
               </span>
               <span className="text-green-500 text-xs flex">
                  {discount}% off
               </span>
            </div>
         </div>
         <AddToCartButton id={id} />
      </div>
   );
};

export default ProductCard;
