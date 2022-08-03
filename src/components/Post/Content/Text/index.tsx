import { Button, ClickAwayListener, ButtonGroup } from "@mui/material";
import { savePostEditing } from "apiCalls";
import { handleMenuOpening } from "components/Post/TopBar/Options";
import { useForm } from "hooks/useForm";
import { FormEvent, MouseEventHandler, useEffect } from "react";
import styles from "./style.module.css";

type Props = {
  description: string;
  isEditing: boolean;
  children: JSX.Element;
  handlePostEditing: () => void;
  handleMenuOpening: handleMenuOpening;
  postId: string;
};

const Text = (props: Props) => {
  const { form, onChange } = useForm({
    initialDescription: "",
    description: "",
  });

  const handleDescriptionChange = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;
    const name: string = target.name;

    onChange(value, name);
  };

  const handleCancelEditing = () => {
    onChange(form.initialDescription, "description");
    props.handlePostEditing();
  };

  const handleSaveEditing = () => {
    savePostEditing(props.postId, form.description);
    props.handlePostEditing();
  };

  useEffect(() => {
    onChange(props.description, "initialDescription");
    onChange(props.description, "description");
  }, []);

  return (
    <>
      {props.isEditing ? (
        <ClickAwayListener onClickAway={() => props.handlePostEditing()}>
          <div>
            <textarea
              name="description"
              onChange={handleDescriptionChange}
              rows={10}
              className={styles.textInput}
              value={form.description}
            ></textarea>
            <ButtonGroup className={styles.buttons}>
              <Button
                className={styles.cancelButton}
                onClick={() => handleCancelEditing()}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={() => handleSaveEditing()}
                disabled={
                  !form.description ||
                  form.description === "" ||
                  form.description === form.initialDescription
                }
              >
                Save
              </Button>
            </ButtonGroup>
          </div>
        </ClickAwayListener>
      ) : (
        props.children
      )}
    </>
  );
};

export default Text;
