import { FC } from "react";
import Banner from "../../Banner/Banner";
import AnimeLayout from "./AnimeLayout/AnimeLayout";
import AsideAnimeLayout from "./AsideAnimeLayout/AsideAnimeLayout";
import "./MainComponent_Style.scss";

const MainComponent: FC = () => {
  return (
    <div className="mainComponent__container">
      <Banner />
      <div className="anime_block__container">
        <AnimeLayout />
        <AsideAnimeLayout />
      </div>
    </div>
  );
};

export default MainComponent;
