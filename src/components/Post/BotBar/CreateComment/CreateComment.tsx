import { ClickAwayListener } from "@mui/material";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import React, { FormEvent, useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

type Props = {
  username: string;
  profilePicture: string;
  noProfilePicture: string;
  inputChangeHandler: (e: FormEvent) => void;
};

const CreateComment = (props: Props) => {
  const { user } = useContext(AuthContext) as AuthContextInterface;

  const { form, onChange } = useForm({
    isInputActive: false,
  });

  const activeCreationHandler = () => {
    onChange(!form.isInputActive, "isInputActive");
  };

  const handleClickAway = () => {
    onChange(false, "isInputActive");
  };

  return (
    <div className={styles.comment}>
      <Link to={`profile/${props.username}`} className={styles.profile}>
        <img
          src={props.profilePicture ?? props.noProfilePicture}
          className={styles.profileImg}
          alt="Post user profile"
        />
      </Link>
      <ClickAwayListener onClickAway={handleClickAway}>
        <textarea
          placeholder={
            form.isInputActive
              ? ""
              : `What's in your mind ${user?.username ?? ""}?`
          }
          name="createComment"
          rows={form.isInputActive ? 4 : 1}
          onFocus={activeCreationHandler}
          className={`${styles.descriptionInput}`}
          value={form.description}
          onChange={props.inputChangeHandler}
        />
      </ClickAwayListener>
    </div>
  );
};

export default CreateComment;
