import { FormEvent, useContext, useEffect, useState } from "react";

import { sendData } from "apiCalls";
import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import heartImg from "img/heart.webp";
import likeImg from "img/like.webp";
import styles from "./style.module.css";
import CreateComment from "./CreateComment";
import Comments from "./Comments";
import { useRequestData } from "hooks/useRequestData";

type Props = {
  postId: string;
  likes: number;
  comments: number;
  profilePicture: string;
  noProfilePicture: string;
};

export type Comment = {
  id: string;
  postId: string;
  userId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const BotBar = (props: Props) => {
  const { form, onChange } = useForm({
    likes: 0,
  });

  const [comments, setComments] = useState<Comment[]>([]);

  const initialComments = useRequestData(
    props.postId ? `${baseUrl}/comment/${props.postId}` : null,
    []
  );

  useEffect(() => {
    onChange(props.likes, "likes");
  }, []);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const { user } = useContext(AuthContext) as AuthContextInterface;
  const { username } = user;

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
    <>
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
      <CreateComment
        username={username}
        profilePicture={props.profilePicture}
        noProfilePicture={props.noProfilePicture}
        postId={props.postId}
        setComments={setComments}
      />
      <Comments comments={comments} postId={props.postId} />
    </>
  );
};

export default BotBar;
