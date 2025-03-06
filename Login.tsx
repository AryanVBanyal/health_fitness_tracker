import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
// Keep the Button component

const Login = ({ isLoggedIn, setisLoggedIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      // setError("Both email and password are required.");
      toast.error("Both email and password are required.", {
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

    try {
      setisLoggedIn(true);
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        formData
      );
      const userId = response.data.userId;
      console.log(userId);

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      // alert("Login successful!");
      toast.success("Login successfully!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      navigate("/ ");
    } catch (error: any) {
      setError(
        error.response?.data?.message || "Login failed! Please try again."
      );
      toast.error("Login failed! Please try again.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center h-screen sm:h-fit sm:w-96 px-6 py-8 bg-light shadow-md bg-purple-50 rounded-lg text-center"
      >
        <div className="w-12 h-12 bg-primary-dark rounded-full mx-auto mb-4"></div>
        <h3 className="text-2xl font-medium mb-6">Login</h3>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <div className="space-y-4">
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
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className={`w-full p-2 rounded-md ${
              loading ? "bg-gray-400" : "bg-purple-500 text-white"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <ToastContainer />
        </div>

        <div className="flex justify-between mt-4">
          <a
            href="#"
            className="mb-2 text-primary-light text-sm hover:underline"
          >
            Forgot password?
          </a>
          <a
            href="/signup"
            className="text-primary-light text-sm hover:underline"
          >
            Don't have an account? Sign Up
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
