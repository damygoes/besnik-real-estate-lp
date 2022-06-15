import React from "react";
import Logo from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/Logo.svg";
import "./footer.css";
import Facebook from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/Facebook.svg";
import Twitter from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/twitter.svg";
import LinkedIn from "/Users/damilolabada/Desktop/projects/besnik-real-estate-lp/src/assets/linkedin.svg";
import "./footer.css";

const Footer = () => {
  return (
    <div className="besnik__footer section__padding">
      <div className="besnik__footer-links">
        <div className="besnik__footer-links_div flipped">
          <h4>Product</h4>
          <p>Listing</p>
          <p>Property</p>
          <p>Agents</p>
          <p>Blog</p>
        </div>
        <div className="besnik__footer-links_div unflipped">
          <h4>Resources</h4>
          <p>Our Homes </p>
          <p>Member Stories</p>
          <p>Video</p>
          <p>Free Trial</p>
        </div>
        <div className="besnik__footer-links_div flipped">
          <h4>Company</h4>
          <p>Partnerships</p>
          <p>Terms of use</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>
        <div className="besnik__footer-links_div unflipped">
          <h4>Get in touch</h4>
          <p>You’ll find your next home, in any style you prefer.</p>
          <div>
            <img src={Facebook} alt="Facebook Logo" />
            <img src={Twitter} alt="Twitter Logo" />
            <img src={LinkedIn} alt="LinkedIn Logo" />
          </div>
        </div>
      </div>

      <div className="besnik__footer-copyright ">
        <div className="besnik__footer-copyright_logo">
          <img src={Logo} alt="besnik-logo" />
        </div>
        <p>@2022 Besnik. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
