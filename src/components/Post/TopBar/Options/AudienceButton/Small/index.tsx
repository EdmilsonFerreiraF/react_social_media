import React, { FormEvent } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton } from "@mui/material";
import { ChevronRight, ManageAccounts } from "@mui/icons-material";
import styles from "../style.module.css";
import smallStyles from "./style.module.css";

type Props = {
  open: boolean;
  handleClickListItem: (event: FormEvent) => void;
  options: string[];
  selectedIndex: number;
};

const Small = (props: Props) => {
  return (
    <List
      component="nav"
      aria-label="Device settings"
      sx={{ bgcolor: "background.paper" }}
      className={smallStyles.changeAudience}
    >
      <ListItem
        button
        id="lock-button"
        aria-haspopup="listbox"
        aria-controls="lock-menu"
        aria-label="audience"
        aria-expanded={props.open ? "true" : undefined}
        onClick={props.handleClickListItem}
        className={smallStyles.listItem}
      >
        <IconButton
          size="small"
          aria-label="change audience"
          color="inherit"
          sx={{
            padding: 0,
          }}
        >
          <ManageAccounts />
        </IconButton>
        <ListItemText
          className={styles.selectedAudience}
          secondary={props.options[props.selectedIndex]}
        />
      </ListItem>
    </List>
  );
};

export default Small;
