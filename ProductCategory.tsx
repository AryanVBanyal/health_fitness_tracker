import React from "react";
import ProductCard from "./ProductCard";

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

interface ProductCategoryProps {
   title: string;
   products: Product[];
}

const ProductCategory: React.FC<ProductCategoryProps> = ({
   title,
   products,
}) => {
   return (
      <div className="px-2 md:px-28">
         <h2 className="text-2xl font-bold uppercase text-gray-800 mt-4 mb-4">
            {title}
         </h2>
         <div className="flex flex-wrap ">
            {products.length > 0 ? (
               products.map((product) => (
                  <ProductCard
                     product={product}
                     key={product.id}
                     id={product._id}
                  />
               ))
            ) : (
               <p className="text-gray-500">No products available</p>
            )}
         </div>
      </div>
   );
};

export default ProductCategory;
