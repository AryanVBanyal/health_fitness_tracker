import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // Import React Router for navigation
import { toast, ToastContainer } from "react-toastify";

const Signup = ({ isSignedUp, setisSignedUp }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "", // Changed from 'username' to 'name' to match backend
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // State for error messages

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevents page reload

    setError(""); // Reset error message

    // Check for empty fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
      toast.error("All fields are required.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    // Check if passwords match
    else if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      toast.error("Passwords do not match!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      return;
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/users/signup",
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
          }
        );
        // alert(response.data.message); // Show success message
        toast.success("Signup successfully!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate("/login");
        setisSignedUp(true);
      } catch (error: any) {
        setError(
          error.response?.data?.message || "Signup failed! Please try again."
        ); // Improved error handling
        toast.error("📝Signup Error!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        console.error("Signup error:", error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center h-screen sm:h-fit sm:w-96 px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center"
      >
        <h3 className="text-2xl font-medium mb-6">Create a new account</h3>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-4">
          <input
            name="name" // Changed from 'username'
            placeholder="User Name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="email"
            placeholder="Email or phone number"
            type="text"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="password"
            placeholder="Password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            name="confirmPassword"
            placeholder="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <p className="text-xs text-left leading-5 my-4">
          By clicking Sign Up, you agree to our
          <a href="#" className="text-blue-700 hover:underline mx-1">
            Terms, Data Policy
          </a>{" "}
          - and
          <a href="#" className="text-blue-700 hover:underline mx-1">
            Cookies Policy.
          </a>
        </p>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-2 bg-purple-500 text-white rounded-md"
          >
            Sign Up
          </button>
          <ToastContainer />
        </div>

        <div className="text-center mt-4">
          <Link
            to="/login"
            className="text-primary-light text-sm hover:underline"
          >
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
