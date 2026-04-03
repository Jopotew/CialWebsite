import { useDevice } from "../../../../hooks/useDevice";
import FamilyMobile from "./family_mobile";
import FamilyDesktop from "./family_desktop";

const Family = () => {
  const { isMobile } = useDevice();
  return isMobile ? <FamilyMobile /> : <FamilyDesktop />;
};

export default Family;
