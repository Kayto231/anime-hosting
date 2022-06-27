import React, { FC } from "react";
import Label from "../atoms/Label/Label";
import "./CommentsBlock_Style.scss";
import CommentsItem from "./CommentsItem/CommentsItem";

interface IComment {
  message: string;
  avatarImg: string;
  time: string;
  nickname: string;
}
interface ICommensBlockProps {
  comments: IComment[];
  label: string;
}

const CommentsBlock: FC<ICommensBlockProps> = ({
  comments = [],
  label,
}): React.ReactElement => {
  return (
    <div className="comments__block__wrappper">
      <Label text={label} fontSize="16px" fontWeight="600" />
      <ul className="comments__overflow">
        {" "}
        {comments.map((comment) => (
          <CommentsItem
            nickname={comment.nickname}
            time={comment.time}
            key={comment.message}
            message={comment.message}
            avatarImg={comment.avatarImg}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentsBlock;
