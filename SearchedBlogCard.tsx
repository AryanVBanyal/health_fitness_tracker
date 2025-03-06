import React from "react";
import { useNavigate } from "react-router-dom";

const SearchedBlogCard = ({
   id,
   title,
   description,
   image,
   category,
   author,
   createdAt,
}) => {
   const navigate = useNavigate();
   const handleSingleBlog = () => {
      console.log(id);

      navigate(`/blogs/${id}`);
   };
   return (
      <>
         {/* box-1 ------------- */}
         <div className="w-[350px] bg-white border border-2 border-gray-200 m-5">
            {/* img ---- */}
            <div className="w-full h-[250px]">
               <img
                  alt="blog"
                  src={image}
                  className="w-full h-full object-cover object-center "
               />
            </div>
            {/* text --- */}
            <div className="p-4 flex flex-col">
               <div className="w-100 flex gap-4 justify-between items-center text-red-500 text-sm">
                  <span>{category}</span>
                  <span className="font-medium ">{author}</span>
               </div>
               <a href="#" className="text-xl font-medium text-gray-800 mt-2">
                  {title}
               </a>
               <p className="text-gray-600 text-sm line-clamp-3 my-5">
                  {description}
               </p>
               <div className="flex justify-between">
                  <span
                     onClick={handleSingleBlog}
                     className="text-black hover:text-red-500 transition-all duration-300"
                  >
                     {" "}
                     Read More
                  </span>

                  <span>{createdAt}</span>
               </div>
            </div>
         </div>
      </>
   );
};

export default SearchedBlogCard;
