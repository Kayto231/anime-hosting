import React, { FC } from "react";
import "./AsideAnimeBlock_Style.scss";

import arrow from "../../../../../assets/images/Arrow.svg";
import animeCard from "../../../../../assets/cardImages/asideAnimeCard.jpg";

import AsideAnimeItem from "./AsideAnimeItem/AsideAnimeItem";
import Label from "../../../../atoms/Label/Label";

interface IAsideAnimeBlockProps {
  categoryName: string;
  isSort?: boolean;
}

const AsideAnimeBlock: FC<IAsideAnimeBlockProps> = ({
  categoryName,
  isSort,
}): React.ReactElement => {
  return (
    <div className="aside_anime_block_wrapper">
      <div className="header_block">
        <div className="description__block">
          <Label text={categoryName} fontSize="18px" fontWeight="600" />
          <div className="view__all">
            view all <img className="arrow" src={arrow} alt="arrow" />
          </div>
        </div>
        {isSort && (
          <ul className="sort__block">
            <li className="sort__item active">Day</li>
            <li className="sort__item">Week</li>
            <li className="sort__item">Month</li>
            <li className="sort__item">Year</li>
          </ul>
        )}
      </div>
      <div className="aside_anime_block">
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />{" "}
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />{" "}
        <AsideAnimeItem
          img={animeCard}
          title="Boruto: Naruto next generations"
          isEpisods="12/12"
          isViews="12"
        />
      </div>
    </div>
  );
};

export default AsideAnimeBlock;
