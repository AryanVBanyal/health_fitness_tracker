import axios from "axios";
import React, { useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const Security = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    id: "", // Store userId
  });

  // Function to get user ID from JWT
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get token from localStorage (or cookies)
    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode the token
        setUser((prevUser) => ({
          ...prevUser,
          id: decoded.userId, // Extract user ID
        }));
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  const handleSave = async () => {
    if (!user.email || !user.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      console.log("id:" + user.id);
      const response = await axios.patch(
        `http://localhost:5000/api/users/${user.id}`,
        {
          email: user.email,
          password: user.password,
        }
      );

      if (response.status === 200) {
        alert("Password updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Error updating user. Please try again.");
    }
  };

  const handleCancel = () => {
    setUser({
      email: "",
      password: "",
      id: user.id, // Preserve user ID
    });
  };

  return (
    <div className="flex flex-col items-center pt-6 sm:pt-8 w-full px-4 sm:px-36">
      <h2 className="text-center text-xl sm:text-3xl font-serif mb-3 sm:mb-12">
        CHANGE PASSWORD
      </h2>
      <div className="w-full">
        <label>Enter Email</label>
        <input
          placeholder={"Enter Email"}
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="w-full">
        <label>Enter new password</label>
        <input
          value={user.password}
          placeholder={"Enter new password"}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          className="w-full p-2 sm:p-2 my-2 sm:my-4 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="w-full flex justify-around my-3">
        <button
          onClick={handleSave}
          className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="py-1 px-2 sm:py-1 sm:px-5 mb-2 sm:mb-6 text-xs md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Security;
