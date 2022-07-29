import { Button, ClickAwayListener, ButtonGroup } from "@mui/material";
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

    console.log("Text - value", value);
    console.log("Text - name", name);
    onChange(value, name);
  };

  const handleCancelButton = () => {
    onChange(form.initialDescription, "description");
    props.handlePostEditing();
  };

  console.log("Text - description", form.description);

  useEffect(() => {
    onChange(props.description, "initialDescription");
    onChange(props.description, "description");
  }, []);

  console.log("props.isEditing", props.isEditing);
  console.log(
    "form.description === form.initialDescription",
    form.description === form.initialDescription
  );
  console.log("form.description", form.description);
  console.log("form.initialDescription", form.initialDescription);
  return (
    <>
      {props.isEditing ? (
        <ClickAwayListener onClickAway={() => props.handlePostEditing()}>
          <>
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
                onClick={() => handleCancelButton()}
                variant="contained"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="success"
                disabled={
                  !form.description ||
                  form.description === "" ||
                  form.description === form.initialDescription
                }
              >
                Save
              </Button>
            </ButtonGroup>
          </>
        </ClickAwayListener>
      ) : (
        props.children
      )}
    </>
  );
};

export default Text;
