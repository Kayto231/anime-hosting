import React, { FC } from "react";
import "./AnimeDetailsItem_Style.scss";
import details from "../../../../assets/cardImages/details-pic.jpg";
import Button from "../../../atoms/Button/Button";
import heart from "../../../../assets/images/follow-heart.svg";

interface IanimeDetailsItemProps {
  title: string;
  subtitle: string;
  description: string;
  rating: Array<any>;
}

const AnimeDetailsItem: FC<IanimeDetailsItemProps> = ({
  title,
  subtitle,
  description,
  rating,
}) => {
  const [types]: string[][] = rating.map((obj) => Object.keys(obj));
  const [values]: string[][] = rating.map((obj) => Object.values(obj));

  return (
    <div className="anime_details_item_block">
      <img className="image" src={details} alt="details" />
      <div className="description">
        <div className="header__block">
          <div className="title">{title}</div>
          <div className="votes">1.1029 Votes</div>
        </div>
        <div className="content__block">
          <div className="subtitle">{subtitle}</div>
          <div className="description__text">{description}</div>
        </div>
        <ul className="rating__block">
          {types.map((type, i) => (
            <li key={type} className="rating__item">
              <span className="rating__category">{type}:</span> {values[i]}
            </li>
          ))}
        </ul>
        <div className="btns">
          <Button text="Follow" img={heart} />
          <Button text="Watch now" />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsItem;
