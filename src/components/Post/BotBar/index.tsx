import { useContext, useEffect } from "react";

import { sendData } from "apiCalls";
import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
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
    likes: 0,
  });

  useEffect(() => {
    onChange(props.likes, "likes");
  }, []);

  const { user } = useContext(AuthContext) as AuthContextInterface;

  const reactionHandler = async () => {
    const url = `${baseUrl}/post/${props.postId}/like`;
    const data = { userId: user.id };

    sendData(url, "put", data).then(() => {
      onChange(
        form.likes > props.likes ? form.likes - 1 : form.likes + 1,
        "likes"
      );
    });
  };

  return (
    <div className={styles.postBotbar}>
      <div className={styles.postReactionList}>
        <img
          className={styles.postReactionItem}
          src={likeImg}
          onClick={reactionHandler}
          alt="Post like reaction"
        />
        <img
          className={styles.postReactionItem}
          src={heartImg}
          onClick={reactionHandler}
          alt="Post heart reaction"
        />
        <span data-testid="post likes" className={styles.postLikeCounter}>
          {form.likes} people liked it
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
