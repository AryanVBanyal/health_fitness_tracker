import { useState } from "react";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import style from "../pages/Contact.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Contact = () => {
   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      country: "",
      role: "",
      comments: "",
   });

   const [error, setError] = useState("");

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setError("");

      try {
         await axios.post(
            "http://localhost:5000/api/contact/message",
            formData
         );
         // alert("Message sent successfully!");

         toast.success("📝 Message sent successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
         });
      } catch (error: any) {
         setError(
            error.response?.data?.message ||
               "Message sending failed! Please try again."
         );
         toast.error("📝 Message sending failed! Please try again.", {
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
   const handleClear = () => {
      setFormData({
         fullName: "",
         email: "",
         country: "",
         role: "",
         comments: "",
      });
   };
   return (
      <div className="w-full">
         <div
            className={`${style.contactBannerSection} w-full h-96 text-6xl text-white font-medium flex justify-center items-center`}
         >
            <h1 className="mt-10">Contact us</h1>
         </div>
         <div
            className={`${style.contactDetailsSection} w-full px-4 md:px-36 bg-purple-50`}
         >
            <h1 className="text-3xl font-medium text-center p-5">
               Let's Start a Conversation
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className={`${style.contactDetails}`}>
                  <h3 className="text-lg md:text-xl font-medium text-center p-5">
                     Ask how we can help you:
                  </h3>
                  <p className="my-2 font-medium">
                     For general inquiries, feel free to contact us at:
                  </p>
                  <p className="md:my-3 p-5 text-base text-slate-700">
                     Email:{" "}
                     <a
                        href="mailto:hello@fitmaestro.com"
                        className="text-primary-dark no-underline hover:underline"
                     >
                        hello@fitmaestro.com
                     </a>{" "}
                     <br />
                     Phone: +91-9876543210, 1800-321-0321, 1800-3036-6303 <br />{" "}
                     (Available from 9 AM to 6 PM)
                  </p>
                  <p className="md:my-3 text-base text-slate-700 p-5">
                     If you are a gym owner or fitness expert looking to
                     purchase gym equipment, connect with us at:
                     <br />
                     Email:{" "}
                     <a
                        href="mailto:shopping@fitmaestro.com"
                        className="text-primary-dark no-underline hover:underline"
                     >
                        shopping@fitmaestro.com
                     </a>
                  </p>
                  <ul className="text-base text-slate-700 p-5">
                     <li>Fitmaestro</li>
                     <li>Trivandrum, Kerala</li>
                     <li>012345</li>
                  </ul>
               </div>
               <form
                  onSubmit={handleSubmit}
                  className={`${style.newsLetterSubscriptionForm} flex flex-col items-center`}
               >
                  <h3 className="text-xl font-medium text-center p-5 mb-5">
                     Please note: all fields are required.
                  </h3>
                  <input
                     name="fullName"
                     placeholder="Full Name"
                     type="text"
                     value={formData.fullName}
                     onChange={handleChange}
                     className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
                  <input
                     name="email"
                     placeholder="Email"
                     type="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
                  <input
                     name="country"
                     placeholder="Country"
                     type="text"
                     value={formData.country}
                     onChange={handleChange}
                     className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
                  <input
                     name="role"
                     placeholder="Role"
                     type="text"
                     value={formData.role}
                     onChange={handleChange}
                     className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  />
                  <textarea
                     name="comments"
                     placeholder="Comments"
                     value={formData.comments}
                     onChange={handleChange}
                     className="w-full p-2 mb-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                     required
                  ></textarea>
                  <p className="my-2">
                     I'd like to receive more information about Fitmaestro; I
                     understand and agree to the
                     <a
                        href="#"
                        className="text-primary-dark no-underline hover:underline"
                     >
                        privacy policy
                     </a>
                     .
                  </p>
                  <p className="my-3">
                     This site is protected by reCAPTCHA and the Google
                     <a
                        href="#"
                        className="text-primary-dark no-underline hover:underline"
                     >
                        privacy policy
                     </a>{" "}
                     and
                     <a
                        href="#"
                        className="text-primary-dark no-underline hover:underline"
                     >
                        Terms of Service
                     </a>
                     apply.
                  </p>
                  {error && <p className="text-red-500">{error}</p>}
                  <div className="flex gap-5 justify-around w-100">
                     <button
                        type="submit"
                        className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs   md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
                     >
                        Send
                     </button>
                     <button
                        onClick={handleClear}
                        type="submit"
                        className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs   md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
                     >
                        Clear
                     </button>
                  </div>
                  <ToastContainer />
               </form>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Contact;
