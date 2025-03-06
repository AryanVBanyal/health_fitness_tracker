import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaCircleUser } from "react-icons/fa6";
import { GoHeartFill } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import NavMenu from "../../Navbar/NavMenu";
import axios from "axios";
import SearchCard from "../ProductShop/SearchCard";
import { IoMdClose } from "react-icons/io";

interface Product {
  _id: string;
  name: string;
  image: string;
  price: {
    original: number;
    discounted: number;
  };
  rating: number;
}

const NavBarShop = ({
  setMenu,
  menu,
  searchedProduct,
  setSearchedProduct,
  searchContent,
  setSearchContent,
  isLoggedIn,
}) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get<Product[]>(
        `http://localhost:5000/api/shoppingRoutes/search?searchTerm=${search}`
      );
      console.log(response.data);
      setSearchedProduct(response.data);
    } catch (error) {
      console.log(error);
    }
    setSearchContent(true);
  };
  const handleSearchClose = () => {
    // setSearch("");
    setSearchContent(false);
  };

  return (
    <div className="w-full z-10 sticky top-0 py-1 sm:py-4 bg-primary-dark flex justify-between px-4 sm:px-24">
      <div className="flex items-center gap-2 sm:gap-6 py-4 md:py-0">
        <NavMenu setMenu={setMenu} menu={menu} />
        <NavLink to="/">
          <div className=" w-6 h-6 sm:w-8 sm:h-8 bg-secondary-light rounded-full"></div>
        </NavLink>
        <NavLink to="/shopping">
          <h3 className="font-bold hidden md:block   text-base sm:text-xl text-primary-light">
            FIT MAESTRO
          </h3>
        </NavLink>
      </div>

      <div className="flex items-center gap-2 sm:gap-6">
        <div className="w-fit flex items-center gap-2 bg-white py-1 text-xs sm:text-lg rounded-3xl">
          <input
            onChange={handleChange}
            value={search}
            type="text"
            placeholder="Search"
            className="ms-4 outline-none w-32 md:w-full "
          />
          {!searchContent ? (
            <button onClick={handleSearch}>
              <FiSearch className="text-xl md:text-2xl text-secondary-dark rounded-full me-2" />
            </button>
          ) : (
            <button onClick={handleSearchClose}>
              <IoMdClose className="text-xl md:text-2xl text-secondary-dark rounded-full me-2" />
            </button>
          )}
        </div>

        {isLoggedIn ? (
          <NavLink
            to="/profile"
            className="text-black hover:text-red-500 transition-all duration-300"
          >
            <FaCircleUser className="text-xl text-secondary-light rounded-full md:text-3xl" />
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="text-black hover:text-red-500 transition-all duration-300"
          >
            <FaCircleUser className="text-xl text-secondary-light rounded-full md:text-3xl" />
          </NavLink>
        )}
        <NavLink to="/shopping/cart">
          <FaShoppingCart className="text-xl md:text-3xl text-secondary-light rounded-full" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBarShop;
