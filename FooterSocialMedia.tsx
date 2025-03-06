import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import FooterHeading from "./FooterHeading";

const FooterSocialMedia = () => {
  return (
    <div>
      <FooterHeading title="Follow Us" />
      <p>
        Cras fermentum odio eu feugiat lide par naso <br /> tierra videa magna
        derita valies
      </p>
      <div className="flex justify-around mt-6">
        <FaFacebookF className="border text-4xl p-2 rounded-full" />
        <FaXTwitter className="border text-4xl p-2 rounded-full" />
        <FaWhatsapp className="border text-4xl p-2 rounded-full" />
        <FaYoutube className="border text-4xl p-2 rounded-full" />
        <FaInstagram className="border text-4xl p-2 rounded-full" />
      </div>
    </div>
  );
};

export default FooterSocialMedia;
