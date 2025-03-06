import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button/Button";

interface Blog {
   _id: string;
   title: string;
   description: string;
   image: string;
}

const SingleBlog = () => {
   const { id } = useParams<{ id: string }>();
   const [blog, setBlog] = useState<Blog | null>(null);
   const [loading, setLoading] = useState<boolean>(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchBlog = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5000/api/blogs/single/${id}`
            );
            setBlog(response.data.singleBlog);
            console.log(blog);
         } catch (err: any) {
            setError(err.response?.data?.message || "Error fetching blog");
         } finally {
            setLoading(false);
         }
      };

      fetchBlog();
   }, [id]);

   if (loading) return <p className="text-center mt-10">Loading...</p>;
   if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
   if (!blog) return <p className="text-center mt-10">Blog not found.</p>;

   return (
      <div className="max-w-[800px] mx-auto mt-20 bg-white rounded-lg shadow-lg overflow-hidden style">
         <img
            alt={blog.title}
            src={`/src/assets/blogs/${blog.image}`}
            className="w-full h-[400px]"
         />
         <h3 className="text-3xl text-gray-800 my-5 text-center">
            {blog.title}
         </h3>
         <p className="text-lg text-gray-700 leading-relaxed my-5 mx-5">
            {blog.description}
         </p>

         <div className="text-center my-5">
            <NavLink
               to="/blogs"
               className="text-black hover:text-red-500 transition-all duration-300"
            >
               <Button label="Back" />
            </NavLink>
         </div>
      </div>
   );
};

export default SingleBlog;
