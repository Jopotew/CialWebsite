import { useDevice } from "../../../hooks/useDevice";
import OwnerMobile from "./owner_mobile";
import OwnerDesktop from "./owner_desktop";

const Owner = () => {
  const { isMobile } = useDevice();
  return isMobile ? <OwnerMobile /> : <OwnerDesktop />;
};

export default Owner;
