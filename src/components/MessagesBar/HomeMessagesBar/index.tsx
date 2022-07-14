import React from "react";

import { User } from "context/AuthContext";
import adImg from "img/ad.webp";
import giftImg from "img/gift.webp";
import FollowingList from "../FollowingList";
import styles from "./style.module.css";

type Props = {
  friends: User[];
};

const HomeMessagesBar = ({ friends }: Props) => {
  return (
    <aside data-testid="homeMessagesBar" aria-labelledby="messages-bar">
      <div className={styles.birthdayContainer}>
        <img className={styles.birthdayImg} src={giftImg} alt="Birthday gift" />
        <span className={styles.birthdayText}>
          <b>Pola Foster</b>
          and <b> 3 other friends </b>
          have a birthday today.
        </span>
      </div>
      <div className={styles.birthdayAd}>
        <img className={styles.messagesBarAd} src={adImg} alt="Ad" />
      </div>
      <h4 className={styles.messagesBarTitle}>Online Friends</h4>
      <FollowingList friends={friends} />
    </aside>
  );
};

export default HomeMessagesBar;
