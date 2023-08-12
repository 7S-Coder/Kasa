import footerLogo from "../img/logoWhite.png";
import "../styles/components/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer_container">
        <Link to="/">
          <img src={footerLogo} alt="kasa-logo" />
        </Link>
        <p>&#xA9; 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
