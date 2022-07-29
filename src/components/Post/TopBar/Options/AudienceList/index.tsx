import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { IconButton } from "@mui/material";
import { ChevronRight, ManageAccounts } from "@mui/icons-material";

type Props = {
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  open: boolean;
  options: string[];
  selectedIndex: number;
};

const AudienceList = (props: Props) => {
  const handleClickListItem = (event: FormEvent) => {
    props.setAnchorEl(event.currentTarget as HTMLElement);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: "background.paper" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="audience"
          aria-expanded={props.open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <IconButton
            size="medium"
            aria-label="change audience"
            color="inherit"
            sx={{
              padding: "10px 12px 10px 0px",
            }}
          >
            <ManageAccounts />
          </IconButton>
          <ListItemText
            primary="Audience"
            secondary={props.options[props.selectedIndex]}
          />
          <ChevronRight />
        </ListItem>
      </List>
    </div>
  );
};

export default AudienceList;
