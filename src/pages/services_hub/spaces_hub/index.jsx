import { useDevice } from "../../../hooks/useDevice";
import SpacesMobile from "./spaces_mobile";
import SpacesDesktop from "./spaces_desktop";

const Spaces = () => {
  const { isMobile } = useDevice();
  return isMobile ? <SpacesMobile /> : <SpacesDesktop />;
};

export default Spaces;
