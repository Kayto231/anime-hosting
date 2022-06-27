import React, { FC } from "react";
import AnimeBlock from "./AnimeBlock/AnimeBlock";
import "./AnimeLayout_Style.scss";

const AnimeLayout: FC = () => {
  return (
    <div className="anime_layout_wrapper">
      <AnimeBlock categoryName={"Trending now"} />
      <AnimeBlock categoryName={"Live now"} />
    </div>
  );
};

export default AnimeLayout;
