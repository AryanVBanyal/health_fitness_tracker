import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddToCartButton from "./addToCart";

interface Product {
   _id: string;
   price: {
      discounted: number;
      original: number;
   };
   name: string;
   // description: string;
   image: string;
   rating: number;

   specifications: {
      material: string;
      color: string;
      size: string;
      sleeve: string;
   };
}

const ProductIndividualCard = () => {
   const { id } = useParams<{ id: string }>();
   const [product, setProduct] = useState<Product | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchProduct = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5000/api/shoppingRoutes/${id}`
            );
            setProduct(response.data);
            console.log(product);
         } catch (err: any) {
            setError(err.response?.data?.message || "Error fetching blog");
         } finally {
            setLoading(false);
         }
      };

      fetchProduct();
   }, [id]);

   if (loading) return <p className="text-center mt-10">Loading...</p>;
   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
   if (!product) return <p className="text-center mt-10">product not found.</p>;
   const discount = Math.round(
      (product.price.discounted / product.price.original) * 100
   );
   return (
      <div className="md:w-[1000px] mx-auto px:4 md:px-16 md:mt-16 shadow-lg pb-5">
         <h2 className="text-primary-dark text-3xl font-bold text-center">
            PRODUCT DETAILS
         </h2>

         <div className="flex flex-col md:flex-row gap-10 justify-center p-4">
            <div className="md:w-3/5">
               <img
                  alt={product.name}
                  src={`/src/assets/shopping/${product.image}`}
                  className="rounded-lg w-full h-[400px] object-cover"
               />
            </div>
            <div className="md:w-2/5">
               <p className="text-2xl font-semibold">{product.name}</p>
               <div className="w-fit">
                  <span className="flex items-center my-2 bg-purple-700 text-xs text-white px-2 py-1 rounded-md mr-2">
                     {product.rating} <IoIosStar />
                  </span>
               </div>
               {/* <p className="text-gray-700 my-4">desc</p> */}
               <div className="flex items-center justify-evenly w-52 my-4">
                  <p className="text-2xl font-bold mr-6">
                     ₹{product.price.discounted}
                  </p>
                  <p className="line-through text-gray-500">
                     ₹{product.price.original}
                  </p>
                  <p className=" text-green-500">{discount}% off.</p>
               </div>
               <h4 className="text-xl font-semibold mb-2">Specifications:</h4>
               <ul className="list-disc list-none pl-4">
                  <li className="text-base font-medium text-stone-600 flex gap-4">
                     <span className="w-24">Brand</span>
                     <span className="font-normal">: Fitmaestro</span>
                  </li>
                  <li className="text-base font-medium text-stone-600 flex gap-4">
                     <span className="w-24">Material</span>
                     <span className="font-normal">
                        : {product.specifications.material}
                     </span>
                  </li>
                  <li className="text-base font-medium text-stone-600 flex gap-4">
                     <span className="w-24"> Colors</span>

                     <span className="font-normal">
                        : {product.specifications.color}
                     </span>
                  </li>
                  {product.specifications.sleeve && (
                     <li className="text-base font-medium text-stone-600 flex gap-4">
                        <span className="w-24"> Sleeve</span>

                        <span className="font-normal">
                           : {product.specifications.sleeve}
                        </span>
                     </li>
                  )}

                  <li className="text-base font-medium text-stone-600 flex gap-4">
                     <span className="w-24">Size</span>

                     <span className="font-normal">
                        : {product.specifications.size}
                     </span>
                  </li>
               </ul>

               <div className="flex gap-5 mt-4">
                  <NavLink to="/shopping/cart">
                     <AddToCartButton id={id} />
                  </NavLink>
                  <NavLink to="/shopping">
                     <button className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs   md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500">
                        Back
                     </button>
                  </NavLink>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProductIndividualCard;
