import React, { useContext, useState } from "react";

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
import { handleMenuOpening } from "./TopBar/Options";

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
    optionsMenuAnchorEl: null,
  });

  console.log("optionsMenuAnchorEl", form.optionsMenuAnchorEl);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleOptionsMenuClose = () => {
    onChange(null, "optionsMenuAnchorEl");
  };

  const handlePostEditing = () => {
    setIsEditing((prevState) => !prevState);
    handleMenuOpening(null, "optionsMenuAnchorEl") as
      | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
      | undefined;
  };

  const handleMenuOpening: handleMenuOpening = (
    value,
    anchor,
    closeMenu = false
  ) => {
    console.log("value", value);
    onChange(value, anchor);

    if (closeMenu) {
      handleOptionsMenuClose();
    }
  };

  return (
    <div data-testid="post" className={styles.post}>
      <div className={styles.postContainer}>
        <TopBar
          profilePicture={profilePicture as string}
          noProfilePicture={noProfilePicture}
          postId={post?.id}
          username={user?.username}
          createdAt={post?.createdAt}
          handlePostEditing={handlePostEditing}
          isEditing={isEditing}
          handleMenuOpening={handleMenuOpening}
          optionsMenuAnchorEl={form.optionsMenuAnchorEl}
        />
        <Content
          readMore={form.readMore}
          handleReadMore={handleReadMore}
          postPicture={postPicture as string}
          noPostPicture={noPostPicture}
          description={post?.description}
          isEditing={isEditing}
          handlePostEditing={handlePostEditing}
          handleMenuOpening={handleMenuOpening}
          optionsMenuAnchorEl={form.optionsMenuAnchorEl}
          postId={post?.id}
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
