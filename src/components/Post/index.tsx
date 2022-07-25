import React, { useContext } from "react";

import { baseUrl } from "constants/baseUrl";
import { AuthContext, AuthContextInterface, User } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { useRequestData } from "hooks/useRequestData";
import { useRequestImage } from "hooks/useRequestImage";
import styles from "./style.module.css";

import noPostPicture from "img/no_image.webp";
import noProfilePicture from "img/no_person.webp";
import BotBar from "./BotBar";
import Content from "./Content";
import TopBar from "./TopBar";

export interface IPost {
  _id: string;
  id: string;
  userId: string;
  description: string;
  image: string;
  likes: User["id"][];
  createdAt: Date;
  comment: number;
}

const Post = ({ post }: { post: IPost }) => {
  const { form, onChange } = useForm({
    likes: post?.likes?.length,
    isLiked: false,
    readMore: false,
  });

  const { user: currentUser } = useContext(AuthContext) as AuthContextInterface;

  const otherUser = useRequestData(
    post && post.userId && `${baseUrl}/user/${post.userId}`,
    {}
  );

  const user = post && post.userId === currentUser.id ? currentUser : otherUser;

  const postPicture = useRequestImage("post", post?.image);
  const profilePicture = useRequestImage("profile", user?.profilePicture);

  const handleReadMore = () => {
    onChange(!form.readMore, "readMore");
  };

  return (
    <div data-testid="post" className={styles.post}>
      <div className={styles.postContainer}>
        <TopBar
          profilePicture={profilePicture as string}
          noProfilePicture={noProfilePicture}
          username={user?.username}
          createdAt={post?.createdAt}
        />
        <Content
          readMore={form.readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture as string}
          noPostPicture={noPostPicture}
          description={post?.description}
        />
        <BotBar
          userId={currentUser?.id}
          postId={post?.id}
          comments={post?.comment}
          likes={post?.likes.length + 1}
        />
      </div>
    </div>
  );
};

export default Post;
