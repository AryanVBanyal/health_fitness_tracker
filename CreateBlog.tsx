import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import { toast, ToastContainer } from "react-toastify";

const CreateBlog = () => {
   const [form, setForm] = useState({
      title: "",
      description: "",
      image: null as File | null,
      category: "",
      author: "",
      createdAt: "",
   });

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setForm({ ...form, [name]: value });
   };

   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
         setForm({ ...form, image: e.target.files[0] });
      }
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("description", form.description);
      formData.append("category", form.category);
      formData.append("author", form.author);
      formData.append("createdAt", form.createdAt);
      if (form.image) {
         formData.append("image", form.image);
      }

      try {
         const response = await axios.post(
            "http://localhost:5000/api/blogs",
            formData,
            {
               headers: {
                  "Content-Type": "multipart/form-data",
               },
            }
         );

         console.log("Blog created:", response.data);
         // alert("Blog created successfully!");
         toast.success("Blog created successfully!", {
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
         console.error("Error creating blog:", error);
         toast.error("Error creating blog!", {
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

   return (
      <>
         <div className="create-blog w-screen flex justify-center items-center h-screen">
            <div className="md:w-[1000px] px:4 md:px-24 md:mt-16 shadow-lg pb-5">
               <h2 className="text-tertiary-dark text-3xl font-medium text-center mb-5">
                  Create Your Blogs
               </h2>
               <form onSubmit={handleSubmit}>
                  <input
                     type="text"
                     name="title"
                     value={form.title}
                     onChange={handleChange}
                     placeholder="Enter your title"
                     className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <textarea
                     name="description"
                     value={form.description}
                     onChange={handleChange}
                     placeholder="Enter your description"
                     className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />

                  <div className="md:flex md:flex-row gap-4 flex-col">
                     <input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />

                     <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 sm:p-2 bg-white my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                  </div>
                  <div className="md:flex md:flex-row gap-4 flex-col">
                     <input
                        type="text"
                        name="category"
                        value={form.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                     <input
                        type="date"
                        name="createdAt"
                        value={form.createdAt}
                        onChange={handleChange}
                        className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     />
                  </div>
                  <div className="flex justify-end gap-4 mt-4 px-5 md:px-0">
                     <Button label="Create" />
                     <NavLink to="/blogs">
                        <Button label="Back" />
                     </NavLink>
                  </div>
               </form>
               <ToastContainer />
            </div>
         </div>
      </>
   );
};

export default CreateBlog;
