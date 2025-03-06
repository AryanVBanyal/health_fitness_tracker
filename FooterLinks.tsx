import { NavLink } from "react-router-dom";
import FooterHeading from "./FooterHeading";

const FooterLinks = () => {
  return (
    <div>
      <FooterHeading title="Useful LInks" />
      <NavLink to="/">
        <p>Home</p>{" "}
      </NavLink>
      <NavLink to="/contact">
        <p>Contact US</p>{" "}
      </NavLink>
      <NavLink to="/">
        <p>Services</p>{" "}
      </NavLink>
      <NavLink to="/">
        <p>Terms and Conditions</p>{" "}
      </NavLink>
    </div>
  );
};

export default FooterLinks;
