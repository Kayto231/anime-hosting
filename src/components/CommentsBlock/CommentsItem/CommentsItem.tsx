import React, { FC } from "react";
import "./CommentsItem_Style.scss";

interface ICommentsItemProps {
  avatarImg: string;
  message: string;
  nickname: string;
  time: string;
}

const CommentsItem: FC<ICommentsItemProps> = ({
  avatarImg,
  message,
  nickname,
  time,
}): React.ReactElement => {
  return (
    <div className="comments__item">
      <img className="avatar__image" src={avatarImg} alt="avatar" />
      <span className="img-icon" />
      <div className="message_wrapper">
        <div className="header__block">
          <span className="nickname">{nickname} ~ </span>
          <span className="time"> {time} Hour ago</span>
        </div>
        <div className="message">{message}</div>
      </div>
    </div>
  );
};

export default CommentsItem;
