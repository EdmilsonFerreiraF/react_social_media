import React from "react";
import { handleMenuOpening } from "../TopBar/Options";

import styles from "./style.module.css";
import Text from "./Text";

type Props = {
  readMore: boolean;
  handleReadMore: () => void;
  postPicture: string;
  noPostPicture: string;
  description: string;
  isEditing: boolean;
  handlePostEditing: () => void;
  optionsMenuAnchorEl: string | null;
  handleMenuOpening: handleMenuOpening;
};

const Content = (props: Props) => {
  return (
    <div className={styles.content}>
      <span data-testid="post content text">
        <Text
          handlePostEditing={props.handlePostEditing}
          isEditing={props.isEditing}
          description={props.description}
          handleMenuOpening={props.handleMenuOpening}
        >
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
        </Text>
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
