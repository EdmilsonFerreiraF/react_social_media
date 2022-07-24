import { handleMenuOpening } from "../MobileMenu";
import MobileNavigation from "./MobileNavigation";
import TabletNavigation from "./TabletNavigation";

type IProps = {
  handleMenuOpening?: handleMenuOpening;
  isMobile?: boolean;
};

const Navigation = (props: IProps) => {
  return props.isMobile ? (
    <MobileNavigation
      handleMenuOpening={props.handleMenuOpening as handleMenuOpening}
    />
  ) : (
    <TabletNavigation />
  );
};

export default Navigation;
