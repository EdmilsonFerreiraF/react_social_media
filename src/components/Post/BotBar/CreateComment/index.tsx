import { ClickAwayListener } from "@mui/material";
import { createComment } from "apiCalls";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import React, {
  Dispatch,
  FormEvent,
  KeyboardEventHandler,
  SetStateAction,
  SyntheticEvent,
  useContext,
} from "react";
import { Link } from "react-router-dom";
import { Comment } from "..";
import styles from "./style.module.css";

type Props = {
  username: string;
  profilePicture: string;
  noProfilePicture: string;
  postId: string;
  setComments: Dispatch<SetStateAction<Comment[]>>;
};

const CreateComment = (props: Props) => {
  const { user } = useContext(AuthContext) as AuthContextInterface;

  const { form, onChange } = useForm({
    isInputActive: false,
    content: "",
  });

  const inputChangeHandler = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;

    const name: string = target.name;

    onChange(value, name);
  };

  const activeCreationHandler = () => {
    onChange(!form.isInputActive, "isInputActive");
  };

  const handleClickAway = () => {
    onChange(false, "isInputActive");
  };

  const handleKeyPress = async (
    e: SyntheticEvent & { key: string } & { shiftKey: boolean }
  ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const newComment = await createComment(props.postId, form.content);

      props.setComments((comments: Comment[]) => [...comments, newComment]);
    }
  };

  return (
    <form className={styles.comment}>
      <Link to={`profile/${props.username}`} className={styles.profile}>
        <img
          src={props.profilePicture ?? props.noProfilePicture}
          className={styles.profileImg}
          alt="Post user profile"
        />
      </Link>
      <ClickAwayListener onClickAway={handleClickAway}>
        <textarea
          onKeyPress={handleKeyPress}
          placeholder={
            form.isInputActive
              ? ""
              : `What's in your mind ${user?.username ?? ""}?`
          }
          name="content"
          rows={form.isInputActive ? 4 : 1}
          onFocus={activeCreationHandler}
          className={`${styles.descriptionInput}`}
          value={form.content}
          onChange={inputChangeHandler}
        />
      </ClickAwayListener>
    </form>
  );
};

export default CreateComment;
