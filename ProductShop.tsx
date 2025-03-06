import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCategory from "./ProductCategory";
import { ToastContainer } from "react-toastify";

interface Shopping {
   id: string;
   name: string;
   image: string;
   price: {
      original: number;
      discounted: number;
   };
   rating: number;
   category: string;
   specifications: {
      color: string;
      material: string;
      product_dimensions: string;
      pattern: string;
      sleeve: string;
      size: string;
   };
   createdAt: string;
}

function ShopProduct() {
   const [shoppings, setShoppings] = useState<Shopping[]>([]);

   useEffect(() => {
      const fetchShoppingProduct = async () => {
         try {
            const response = await axios.get<Shopping[]>(
               "http://localhost:5000/api/shoppingRoutes"
            );
            console.log("Fetched products:", response.data);
            setShoppings(response.data);
         } catch (error) {
            console.error("Error fetching products:", error);
         }
      };
      fetchShoppingProduct();
   }, []);

   // Filter products by category
   const clothingProducts = shoppings.filter(
      (product) => product.category.toLowerCase() === "clothing"
   );
   const fitnessProducts = shoppings.filter(
      (product) => product.category.toLowerCase() === "fitness"
   );

   return (
      <div className="">
         <ProductCategory title="Clothing" products={clothingProducts} />
         <ProductCategory title="Fitness" products={fitnessProducts} />
         <ToastContainer />
      </div>
   );
}

export default ShopProduct;
