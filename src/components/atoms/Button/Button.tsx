import React, { FC } from "react";
import "./Button_Style.scss";

interface IbuttonProps {
  text: string;
  img?: string;
  onclick?: () => void | undefined;
}

const Button: FC<IbuttonProps> = ({
  text,
  img,
  onclick,
}): React.ReactElement => {
  return (
    <button onClick={onclick} className="btn button">
      {img && <img className="btn__image" src={img} alt="button image" />}
      <span className="btn__text">{text}</span>
    </button>
  );
};

export default Button;
