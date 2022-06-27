import React, { FC } from "react";

import "./AnimeItem_Style.scss";
import comment from "../../../../../../assets/images/comment-icon.svg";
import eye_icon from "../../../../../../assets/images/eye-icon.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../../AppRouter/consts";

interface IanimeItemProps {
  imgSrc: string;
  id: number;
  title?: string;
  isTags?: string[];
  isComments?: string;
  isViews?: string;
  isEpisods?: string;
  height?: number;
  imgHeight?: number;
  width?: number;
}

const AnimeItem: FC<IanimeItemProps> = ({
  imgSrc,
  title,
  isComments = "",
  isTags,
  isViews = "",
  isEpisods = "",
  id,
}): React.ReactElement => {
  return (
    <div className="anime_item_card_wrapper">
      <Link to={`${ROUTES.ANIME_DETAILS}?id=${id}`}>click</Link>
      <div className="anime_item_card_image">
        {imgSrc && <img className="image" src={imgSrc} alt="animeCard" />}
        {isEpisods && (
          <div className="anime_item_card_episods_tracker">{isEpisods}</div>
        )}

        {isComments && (
          <div className="anime_item_card_comments_tracker">
            <img className="comment img" src={comment} alt="comments" />
            {isComments}
          </div>
        )}
        {isViews && (
          <div className="anime_item_card_views_tracker">
            <img className="eye img" src={eye_icon} alt="views" />
            {isViews}
          </div>
        )}
      </div>
      {isTags && (
        <ul className="anime_item_card_tags">
          {isTags.map((tag) => (
            <li key={tag} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
      {title && <div className="anime_item_card_title">{title}</div>}
    </div>
  );
};

export default AnimeItem;
