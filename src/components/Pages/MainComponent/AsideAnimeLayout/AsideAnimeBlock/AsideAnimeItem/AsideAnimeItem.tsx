import { FC } from "react";
import "./AsideAnimeItem_Style.scss";

import eye_icon from "../../../../../../assets/images/eye-icon.svg";

interface IasideAnimeItemCardProps {
  img: string;
  isEpisods?: string;
  isViews?: string;
  title?: string;
}

const AsideAnimeItem: FC<IasideAnimeItemCardProps> = ({
  img,
  isEpisods,
  isViews,
  title,
}) => {
  return (
    <div className="aside_anime_item_card_wrapper">
      <img className="image" src={img} alt="img" />
      {isEpisods && (
        <div className="aside_anime_item_card_episods_tracker">{isEpisods}</div>
      )}
      {isViews && (
        <div className="anime_item_card_views_tracker">
          <img className="eye img" src={eye_icon} alt="views" />
          {isViews}
        </div>
      )}
      {title && <div className="anime_item_card_title">{title}</div>}
    </div>
  );
};

export default AsideAnimeItem;
