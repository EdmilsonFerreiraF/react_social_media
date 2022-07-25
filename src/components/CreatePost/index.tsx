import React, { FormEvent } from "react";
import { v4 } from "uuid";

import { sendData, uploadPostPic } from "apiCalls";
import { baseUrl } from "constants/baseUrl";
import { useForm } from "hooks/useForm";
import BotBar from "./BotBar";
import Content from "./Content";
import styles from "./style.module.css";

const CreatePost = () => {
  const { form, onChange } = useForm({
    description: "",
    file: "",
    isActive: false,
  });

  const generateImgId = () => {
    return v4();
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const url = `${baseUrl}/post`;

    const newPost = {
      description: form.description,
      image: generateImgId(),
    };

    uploadPostPic(form.file, newPost.image);
    sendData(url, "post", newPost);
  };

  const inputChangeHandler = (e: FormEvent) => {
    const target = e.target as HTMLInputElement;
    const value: string = target.value;
    let file: File | null;
    file = target.files && (target.files as FileList)[0];

    const name: string = target.name;

    onChange(file || value, name);
  };

  return (
    <form
      data-testid="createPost"
      className={styles.createPost}
      onSubmit={submitHandler}
    >
      <div className={styles.createPostContainer}>
        <Content inputChangeHandler={inputChangeHandler} />
        <hr className={styles.createPostDivision} />
        <BotBar form={form} inputChangeHandler={inputChangeHandler} />
      </div>
    </form>
  );
};

export default CreatePost;
