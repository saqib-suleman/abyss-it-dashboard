import { React } from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <span>
        Copyright &#169; {new Date().getFullYear()} Abyss Solutions | All rights
        reserved
      </span>
    </div>
  );
}

export default Footer;
