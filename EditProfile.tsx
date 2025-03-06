import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    fullName: "",
    dob: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const [userid, setUserid] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<{ userId: string }>(token);
        setUserid(decoded.userId);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
    console.log("userid: " + userid);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      if (!userid) {
        console.error("User ID not found");
        return;
      }
      const response = await axios.put(
        ` http://localhost:5000/api/profile/${userid}`,
        formData
      );
      alert("success");
      console.log("Profile updated:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {};

  return (
    <div className="flex flex-col items-center pt-6 sm:pt-8 w-full px-4 sm:px-36">
      <h2 className="text-center text-xl sm:text-3xl font-serif mb-3 sm:mb-12">
        EDIT PROFILE
      </h2>

      <div className="w-full">
        <label>Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <div className="w-full">
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex gap-2 w-full">
        <div className="w-full">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="w-full">
          <label>State</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="w-full">
        <label>Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="w-full">
        <label>Pincode</label>
        <input
          type="number"
          name="pincode"
          value={formData.pincode}
          onChange={handleChange}
          className="w-full p-2 my-2 text-xs sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="w-full flex justify-around my-3">
        <button
          onClick={handleSave}
          className="py-1 px-2 sm:px-5 mb-2 text-xs md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          className="py-1 px-2 sm:px-5 mb-2 text-xs md:text-lg font-bold border border-1 border-primary-dark text-white rounded-md bg-primary-dark hover:bg-secondary-light hover:text-primary-dark focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
