import { NavLink } from "react-router-dom";
import FooterHeading from "./FooterHeading";

const FooterServices = () => {
  return (
    <div>
      <FooterHeading title="Our Services" />
      <NavLink to="/workouts">
        <p>Workout</p>{" "}
      </NavLink>
      <NavLink to="/">
        <p>Diet</p>{" "}
      </NavLink>
      <NavLink to="/chats">
        <p>Personal consultants</p>{" "}
      </NavLink>
      <NavLink to="/shopping">
        <p>Shopping</p>{" "}
      </NavLink>
    </div>
  );
};

export default FooterServices;
