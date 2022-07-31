import React, { FormEvent, useState } from "react";
import { v4 } from "uuid";

import { Audience, sendData, uploadPostPic } from "apiCalls";
import { baseUrl } from "constants/baseUrl";
import { useForm } from "hooks/useForm";
import BotBar from "./BotBar";
import Content from "./Content";
import styles from "./style.module.css";

const CreatePost = () => {
  const { form, onChange } = useForm({
    description: "",
    audience: "PUBLIC",
    file: "",
    isActive: false,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const open = Boolean(anchorEl);
  const options = ["Public", "Friends", "Friend of friends", "Only me"];

  type AudienceType = keyof typeof Audience;

  const selectedOptionToAudience = () => {
    const upperSnakedOption = options[selectedIndex as number]
      .split(" ")
      .join("_")
      .toUpperCase() as AudienceType;

    return Audience[upperSnakedOption];
  };

  console.log("selectedOptionToAudience", selectedOptionToAudience());

  const handleMenuItemClick = (event: FormEvent, index: number) => {
    setSelectedIndex(index);

    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const generateImgId = () => {
    return v4();
  };

  const submitHandler = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const url = `${baseUrl}/post`;

    const newPost = {
      description: form.description,
      audience: selectedOptionToAudience(),
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
        <Content
          inputChangeHandler={inputChangeHandler}
          anchorEl={anchorEl}
          open={open}
          handleClose={handleClose}
          selectedIndex={selectedIndex}
          handleMenuItemClick={handleMenuItemClick}
          options={options}
          setAnchorEl={setAnchorEl}
        />
        <hr className={styles.createPostDivision} />
        <BotBar form={form} inputChangeHandler={inputChangeHandler} />
      </div>
    </form>
  );
};

export default CreatePost;
