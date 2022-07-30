import { Dispatch, FormEvent, SetStateAction } from "react";
import Big from "./Big";
import Small from "./Small";
import styles from "./style.module.css";
import smallStyles from "./Small/style.module.css";

type Props = {
  setAnchorEl: Dispatch<SetStateAction<HTMLElement | null>>;
  open: boolean;
  options: string[];
  selectedIndex: number;
  size?: "small";
};

const AudienceButton = (props: Props) => {
  const handleClickListItem = (event: FormEvent) => {
    props.setAnchorEl(event.currentTarget as HTMLElement);
  };

  return (
    <div className={styles.audienceButton}>
      {props.size === "small" ? (
        <Small
          open={props.open}
          handleClickListItem={handleClickListItem}
          options={props.options}
          selectedIndex={props.selectedIndex}
        />
      ) : (
        <Big
          open={props.open}
          handleClickListItem={handleClickListItem}
          options={props.options}
          selectedIndex={props.selectedIndex}
        />
      )}
    </div>
  );
};

export default AudienceButton;
