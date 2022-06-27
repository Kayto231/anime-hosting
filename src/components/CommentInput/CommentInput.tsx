import React, { FC } from "react";
import Button from "../atoms/Button/Button";
import Label from "../atoms/Label/Label";
import "./CommentInput_Style.scss";

const CommentInput: FC = (): React.ReactElement => {
  return (
    <div className="comment_input_wrapper">
      <Label text="Send your comment" fontSize="18px" fontWeight="600" />
      <textarea className="textarea" placeholder="Your comment"></textarea>
      <Button text="Send" />
    </div>
  );
};

export default CommentInput;
