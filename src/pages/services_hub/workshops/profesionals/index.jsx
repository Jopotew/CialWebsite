import { useDevice } from "../../../../hooks/useDevice";
import ProfessionalsMobile from "./profesionals_mobile";
import ProfessionalsDesktop from "./profesionals_desktop";

const Professionals = () => {
  const { isMobile } = useDevice();
  return isMobile ? <ProfessionalsMobile /> : <ProfessionalsDesktop />;
};

export default Professionals;
