import React, { FC } from "react";
import "./Label_Style.scss";

interface ILabelProps {
  text: string;
  fontSize: string;
  fontWeight: string;
}

const Label: FC<ILabelProps> = ({ text, fontSize, fontWeight }) => {
  return (
    <div className="label" style={{ fontSize, fontWeight }}>
      {text}
    </div>
  );
};

export default Label;
