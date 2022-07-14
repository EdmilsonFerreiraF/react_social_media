import React from "react";

import { User } from "context/AuthContext";
import InfoItem from "../InfoItem";
import styles from "./style.module.css";

const InfoList = ({ user }: { user: User }) => {
  type InfoItems = [number, string, string];

  const infoItems: InfoItems[] = [
    [0, "City", user?.city as string],
    [1, "From", user?.from as string],
    [
      2,
      "Relationship",
      user?.relationship === 0
        ? "Single"
        : user?.relationship === 1
        ? "Married"
        : "-",
    ],
  ];

  return (
    <div className={styles.messagesBarInfo}>
      {infoItems.map((infoItem: InfoItems) => (
        <InfoItem key={infoItem[0]} title={infoItem[1]} text={infoItem[2]} />
      ))}
    </div>
  );
};

export default InfoList;
