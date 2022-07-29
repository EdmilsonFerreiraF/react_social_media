import { useForm } from "hooks/useForm";
import { FormEvent, useEffect } from "react";
import styles from "./style.module.css";

type Props = {
  description: string;
  isEditing: boolean;
  children: JSX.Element;
  handlePostEditing: () => void;
};

const Text = (props: Props) => {
  const { form, onChange } = useForm({
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

  console.log("Text - description", form.description);

  useEffect(() => {
    onChange(props.description, "description");
  }, []);

  console.log("props.isEditing", props.isEditing);
  return (
    <>
      {props.isEditing ? (
        <textarea
          name="description"
          onChange={handleDescriptionChange}
          rows={10}
          className={styles.textInput}
          value={form.description}
        ></textarea>
      ) : (
        props.children
      )}
    </>
  );
};

export default Text;
