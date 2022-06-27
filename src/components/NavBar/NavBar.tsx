import React, { FC, useEffect, useRef, useState } from "react";
import "./NavBar_Style.scss";
import navBar_arrow from "../../assets/images/navBar_arrow.svg";
import search_icon from "../../assets/images/search_icon.svg";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Link } from "react-router-dom";
import { ROUTES } from "../AppRouter/consts";

const NavBar: FC = (): React.ReactElement => {
  const [checked, setChecked] = useState<boolean>(false);
  const { isIntersection } = useTypedSelector((state) => state.navBar);

  return (
    <div
      className={isIntersection ? "navBar__wrapper fixed" : "navBar__wrapper"}
    >
      <div className="logo__block">
        <span className="text">Ani</span>
        <span className="text_colored">Me</span>
      </div>
      <ul className="navBtns__block">
        <Link className="btn__item active" to={ROUTES.MAIN_COMPONENT}>
          Homepage
        </Link>
        <li onClick={() => setChecked(!checked)} className="btn__item ">
          Categories{" "}
          <img
            className={!checked ? "arrow__image" : "arrow__image checked"}
            src={navBar_arrow}
            alt=""
          />
          <div
            className={checked ? "dropwdown__menu visiable" : "dropwdown__menu"}
          >
            <Link className="dropdown__item" to={ROUTES.ANIME_DETAILS}>
              Anime Details
            </Link>
          </div>
        </li>
        <li className="btn__item">Our Blog</li>
        <li className="btn__item">Contacts</li>
      </ul>
      <div className="auth__block">
        <img className="search__icon" src={search_icon} alt="search_icon" />
      </div>
    </div>
  );
};

export default NavBar;
