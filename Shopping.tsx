import Banner from "../components/shopping/BannerShop/Banner";
import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";
import ProductShop from "../components/shopping/ProductShop/ProductShop";
import { useState } from "react";
import SearchCard from "../components/shopping/ProductShop/SearchCard";
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

const Shopping = ({ setMenu, menu, isLoggedIn }) => {
  const [searchedProduct, setSearchedProduct] = useState<Product[]>([]);
  const [searchContent, setSearchContent] = useState(false);
  return (
    <div>
      <NavBarShop
        isLoggedIn={isLoggedIn}
        setMenu={setMenu}
        menu={menu}
        searchedProduct={searchedProduct}
        setSearchedProduct={setSearchedProduct}
        searchContent={searchContent}
        setSearchContent={setSearchContent}
      />

      {searchContent ? (
        <div className="flex justify-center items-center my-5 flex-wrap flex-row container">
          {searchedProduct.map((prod) => (
            <SearchCard
              key={prod._id}
              id={prod._id}
              name={prod.name}
              price={prod.price}
              image={prod.image}
              rating={prod.rating}
            />
          ))}
        </div>
      ) : (
        <>
          <Banner />
          <ProductShop />
        </>
      )}
    </div>
  );
};

export default Shopping;
