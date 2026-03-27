import { useDevice } from "../../hooks/useDevice";
import NovedadesMobile from "./novedades_mobile";
import NovedadesDesktop from "./novedades_desktop";

const Novedades = () => {
  const { isMobile } = useDevice();
  return isMobile ? <NovedadesMobile /> : <NovedadesDesktop />;
};

export default Novedades;
