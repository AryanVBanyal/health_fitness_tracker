import Cart from "../components/shopping/Cart/cart";

import NavBarShop from "../components/shopping/NavBarShop/NavBarShop";

const cart = ({ setMenu, menu }) => {
  return (
    <div>
      <NavBarShop setMenu={setMenu} menu={menu} />
      <Cart />
    </div>
  );
};

export default cart;
