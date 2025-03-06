import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";
import FooterServices from "./FooterServices";
import FooterSocialMedia from "./FooterSocialMedia";

const Footer = () => {
  return (
    <div className="bg-primary-dark text-secondary-light">
      <div className="md:px-24 grid md:grid-cols-4 gap-10 p-4">
        <FooterContact />
        <FooterLinks />
        <FooterServices />
        <FooterSocialMedia />
      </div>
    </div>
  );
};

export default Footer;
