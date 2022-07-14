import React from "react";

import styles from "./style.module.css";

type Props = {
  readMore: boolean;
  handleReadMore: () => void;
  postPicture: string;
  noPostPicture: string;
  description: string;
};

const Content = (props: Props) => {
  return (
    <div className={styles.content}>
      <span data-testid="post content text" className={"styles.contentText"}>
        {!props.readMore ? (
          <>
            {props.description.slice(0, 150)}
            <span className={styles.readMore} onClick={props.handleReadMore}>
              ... read more
            </span>
          </>
        ) : (
          <>
            {props.description}
            <span className={styles.readLess} onClick={props.handleReadMore}>
              read less
            </span>
          </>
        )}
      </span>

      <img
        data-testid="post content image"
        className={styles.contentImg}
        src={props.postPicture ?? props.noPostPicture}
        alt="Post content"
      />
    </div>
  );
};

export default Content;
