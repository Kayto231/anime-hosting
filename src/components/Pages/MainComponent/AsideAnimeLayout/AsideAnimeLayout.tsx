import React, { FC } from "react";
import AsideAnimeBlock from "./AsideAnimeBlock/AsideAnimeBlock";
import "./AsideAnimeLayout_Style.scss";

const AsideAnimeLayout: FC = () => {
  return (
    <div className="aside_anime_layout_block">
      <AsideAnimeBlock isSort={true} categoryName="TOP VIEWS" />
    </div>
  );
};

export default AsideAnimeLayout;
