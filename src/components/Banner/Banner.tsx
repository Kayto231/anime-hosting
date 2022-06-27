import React, { FC, useEffect, useRef } from "react";
import "./Banner_style.scss";

import banner_image from "../../assets/images/banner.jpg";
import ArrowButton from "../atoms/ArrowButton/ArrowButton";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAction } from "../../hooks/useActions";

const Banner: FC = (): React.ReactElement => {
  const bannerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const { isIntersection } = useTypedSelector((state) => state.navBar);
  const { SetNavBarStyle } = useAction();

  const options = {
    rootMargin: "0px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        SetNavBarStyle(false);
      } else {
        SetNavBarStyle(true);
      }
    });
  }, options);

  useEffect(() => {
    observer.observe(bannerRef.current);
    return () => {
      observer.disconnect();
      SetNavBarStyle(false);
      window.scrollTo({ top: 0 });
    };
  }, [bannerRef]);

  return (
    <div
      ref={bannerRef}
      style={{ marginTop: isIntersection ? "125px" : "65px" }}
      className="banner__wrapper"
    >
      <div className="left_arrow">
        <ArrowButton direction={40} />
      </div>
      <img className="banner__image" src={banner_image} alt="banner_image" />
      <div className="right_arrow">
        <ArrowButton direction={223} />
      </div>
    </div>
  );
};

export default Banner;
