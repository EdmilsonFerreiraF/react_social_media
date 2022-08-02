import { baseUrl } from "constants/baseUrl";
import { useRequestData } from "hooks/useRequestData";
import { useRequestImage } from "hooks/useRequestImage";
import React from "react";
import noProfilePicture from "img/no_person.webp";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

type Props = {
  postId: string;
  comments: any
};

const Comments = (props: Props) => {
  return (
    <ul className={styles.comments}>
      {props.comments.map((comment: any) => (
        <CommentItem comment={comment} />
      ))}
    </ul>
  );
};

export default Comments;

type ItemProps = {
  comment: any;
};

export const CommentItem = (props: ItemProps) => {
  const user = useRequestData(
    props.comment?.username
      ? `${baseUrl}/user/${props.comment?.username}`
      : null,
    {}
  );

  const profilePicture = useRequestImage("profile", user?.profilePicture);

  return (
    <li className={styles.commentItem}>
      <Link to={user?.username ? `profile/${user?.username}` : ""}>
        <img
          src={profilePicture ?? noProfilePicture}
          className={styles.profileImg}
          alt="Post user profile"
        />
      </Link>
      <div className={styles.commentContent}>
        <Link
          to={user?.username ? `profile/${user?.username}` : ""}
          className={styles.commentUsername}
        >
          {user?.username}
        </Link>
        <span className={styles.commentText}>{props.comment?.content}</span>
      </div>
    </li>
  );
};
