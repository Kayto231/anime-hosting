import React, { FC, useEffect } from "react";
import "./AnimeDetailsPage_Style.scss";

import { useSearchParams } from "react-router-dom";

import CommentsBlock from "../../CommentsBlock/CommentsBlock";
import AsideAnimeBlock from "../MainComponent/AsideAnimeLayout/AsideAnimeBlock/AsideAnimeBlock";
import AnimeDetailsItem from "./AnimeDetailsItem/AnimeDetailsItem";

import Avatar from "../../../assets/cardImages/avatar.jpg";
import CommentInput from "../../CommentInput/CommentInput";

const AnimeDetailsPage: FC = (): React.ReactElement => {
  const [url, setUrl] = useSearchParams();
  console.log(url.get("id"));

  useEffect(() => {}, []);

  return (
    <div className="anime_details__container">
      <div className="navigation__tracker">
        Home {">"} Categories {">"} Title
      </div>
      <AnimeDetailsItem
        subtitle="フェイト／ステイナイト, Feito／sutei naito"
        title="Fate Stay Night: Unlimited Blade"
        rating={[
          {
            type: "TV series",
            Studios: "Lerche",
            "Date aired": "Oct 02, 2019 to ?",
            Status: "Airing",
            Genre: "Action, Adventure, Fantasy, Magic",
            Scores: "7.31 / 1,515",
            Rating: "8.5 / 161 times",
            Duration: "24 min/ep",
            Quality: "HD",
            Views: "131,541",
          },
        ]}
        description="Every human inhabiting the world of Alcia is branded by a “Count” or a number written on their body. For Hina’s mother, her total drops to 0 and she’s pulled into the Abyss, never to be seen again. But her mother’s last words send Hina on a quest to find a legendary hero from the Waste War - the fabled Ace!"
      />

      <div className="footer__block">
        <div className="comments">
          <CommentsBlock
            label="reviews"
            comments={[
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Alex",
                time: "2",
              },
              {
                avatarImg: Avatar,
                message: "lorem",
                nickname: "Hue Jackson",
                time: "5",
              },
              {
                avatarImg: Avatar,
                message: "I am first!",
                nickname: "Doren Macartney",
                time: "10",
              },
              {
                avatarImg: Avatar,
                message: "Hello",
                nickname: "Jameson Brusse",
                time: "3",
              },
            ]}
          />
          <CommentInput />
        </div>
        <div className="aside__anime__details__block">
          <AsideAnimeBlock categoryName="You might like" />
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailsPage;
