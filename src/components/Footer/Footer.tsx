import React, { FC } from "react";
import "./Footer_Style.scss";

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="footer__wrapper">
      <div className="logo__block">
        <span className="text">Ani</span>
        <span className="text_colored">Me</span>
      </div>
      <ul className="navBtns__block">
        <li onClick={() => scrollToTop()} className="btn__item active">
          Homepage
        </li>
        <li className="btn__item ">Categories </li>
        <li className="btn__item">Our Blog</li>
        <li className="btn__item">Contacts</li>
      </ul>
    </div>
  );
};

export default Footer;
