import { Chat, Notifications, Person } from "@mui/icons-material";
import React from "react";

import SocialItem from "./SocialItem";
import styles from "./style.module.css";

const Social = () => {
  const socialItems = [
    [0, <Person />],
    [1, <Chat />],
    [2, <Notifications />],
  ];

  return (
    <div data-testid="social" role="menu" className={styles.social}>
      {socialItems.map((item, idx) => (
        <SocialItem key={item[0] as number} badge={idx + 1}>
          {item[1] as JSX.Element}
        </SocialItem>
      ))}
    </div>
  );
};

export default Social;
