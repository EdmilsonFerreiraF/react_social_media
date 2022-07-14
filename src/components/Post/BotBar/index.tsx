import React from "react";

import { sendData } from "apiCalls";
import { baseUrl } from "constants/baseUrl";
import { useForm } from "hooks/useForm";
import heartImg from "img/heart.webp";
import likeImg from "img/like.webp";
import styles from "./style.module.css";

type Props = {
  userId: string;
  postId: string;
  likes: number;
  comments: number;
};

const BotBar = (props: Props) => {
  const { form, onChange } = useForm({
    isLiked: false,
  });

  const likeHandler = async () => {
    const url = `${baseUrl}/post/${props.postId}/like`;
    const data = { userId: props.userId };

    sendData(url, "put", data).catch(() => {
      onChange(form.isLiked ? form.likes - 1 : form.likes + 1, "isLiked");
    });
  };

  return (
    <div className={styles.postBotbar}>
      <div className={styles.postReactionList}>
        <img
          className={styles.postReactionItem}
          src={likeImg}
          onClick={likeHandler}
          alt="Post like reaction"
        />
        <img
          className={styles.postReactionItem}
          src={heartImg}
          onClick={likeHandler}
          alt="Post heart reaction"
        />
        <span data-testid="post likes" className={styles.postLikeCounter}>
          {props.likes} people liked it
        </span>
      </div>
      <div data-testid="post comments" className={styles.postComments}>
        <span className={styles.postCommentCounter}>
          {props.comments} comments
        </span>
      </div>
    </div>
  );
};

export default BotBar;
