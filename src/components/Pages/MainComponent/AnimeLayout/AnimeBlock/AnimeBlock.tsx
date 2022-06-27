import React, { FC } from "react";
import "./AnimeBlock_Style.scss";

import arrow from "../../../../../assets/images/Arrow.svg";
import animeCard from "../../../../../assets/cardImages/animeCard.jpg";

import AnimeItem from "./AnimeItem/AnimeItem";
import Label from "../../../../atoms/Label/Label";

interface IAnimeBlockProps {
  categoryName: string;
}

const AnimeBlock: FC<IAnimeBlockProps> = ({
  categoryName,
}): React.ReactElement => {
  return (
    <div className="anime_block_wrapper">
      <div className="header_block">
        <Label text={categoryName} fontSize="18px" fontWeight="600" />
        <div className="view__all">
          view all <img className="arrow" src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="anime_items_block">
        <AnimeItem
          id={1}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
        <AnimeItem
          id={2}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
        <AnimeItem
          id={3}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
        <AnimeItem
          id={4}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
        <AnimeItem
          id={5}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
        <AnimeItem
          id={6}
          imgSrc={animeCard}
          title="The Seven Deadly Sins: Wrath of the Gods"
          isComments={"123"}
          isEpisods="18/18"
          isTags={["Active", "Horror"]}
          isViews="1231"
        />
      </div>
    </div>
  );
};

export default AnimeBlock;
