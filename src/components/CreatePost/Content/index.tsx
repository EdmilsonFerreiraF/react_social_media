import { ClickAwayListener, Menu, MenuItem } from "@mui/material";
import { Dispatch, FormEvent, SetStateAction, useContext } from "react";

import AudienceList from "components/Post/TopBar/Options/AudienceButton";
import { AuthContext, AuthContextInterface } from "context/AuthContext";
import { useForm } from "hooks/useForm";
import { useRequestImage } from "hooks/useRequestImage";
import noProfilePicture from "img/no_person.webp";
import styles from "./style.module.css";

type Props = {
  inputChangeHandler: (e: FormEvent) => void;
  anchorEl: null | HTMLElement;
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  open: boolean;
  handleClose: () => void;
  selectedIndex: number;
  options: string[];
  handleMenuItemClick: (event: FormEvent, index: number) => void;
};

const Content = (props: Props) => {
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

  const profilePicture = useRequestImage("profile", user?.profilePicture);

  return (
    <div className={styles.content}>
      <img
        className={styles.profileImg}
        id="profileImg"
        src={profilePicture ?? noProfilePicture}
        alt="CreatePost user profile"
      />

      <div className={styles.description}>
        <Menu
          id="lock-menu"
          anchorEl={props.anchorEl}
          open={props.open}
          onClose={() => props.handleClose()}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "lock-button",
            role: "listbox",
          }}
        >
          {props.options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === props.selectedIndex}
              onClick={(event) => props.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <AudienceList
          options={props.options}
          setAnchorEl={props.setAnchorEl}
          selectedIndex={props.selectedIndex}
          open={props.open}
          size="small"
        />
        <ClickAwayListener onClickAway={handleClickAway}>
          <textarea
            placeholder={
              form.isInputActive
                ? ""
                : `What's in your mind ${user?.username ?? ""}?`
            }
            name="description"
            rows={form.isInputActive ? 4 : 1}
            onFocus={activeCreationHandler}
            className={`${styles.descriptionInput} ${
              form.isInputActive ? styles.activeInput : ""
            }`}
            value={form.description}
            onChange={props.inputChangeHandler}
          />
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default Content;
