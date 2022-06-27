import React, { FC } from "react";
import "./ArrowButton_Style.scss";
import arrow from "../../../assets/images/Arrow.svg";

interface IArrowButtonProps {
  direction: number;
}

const ArrowButton: FC<IArrowButtonProps> = ({ direction }) => {
  return (
    <button className="arrow__btn">
      <img
        src={arrow}
        style={{ transform: `rotateZ(${direction}deg)` }}
        alt="arrow-btn"
      />
    </button>
  );
};

export default ArrowButton;
