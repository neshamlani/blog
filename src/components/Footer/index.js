import React from "react";
import "./Footer.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import telegram from "../../assets/telegram.png";
import twitter from "../../assets/twitter.png";

const socialMedia = [
  {
    icons: instagram,
    url: "https://www.instagram.com/",
  },
  {
    icons: facebook,
    url: "https://www.facebook.com/",
  },
  {
    icons: telegram,
    url: "https://telegram.org/",
  },
  {
    icons: twitter,
    url: "https://twitter.com/",
  },
];

const Footer = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="footer-wrapper">
      <div className="title">Blog-A-Holic</div>
      <div className="d-flex align-items-center">
        <div>Follow us on</div>
        {socialMedia.map((media) => (
          <img
            src={media.icons}
            className="icon"
            role="button"
            key={media.url}
            onClick={() => handleRedirect(media.url)}
          />
        ))}
      </div>
    </div>
  );
};

export default Footer;
