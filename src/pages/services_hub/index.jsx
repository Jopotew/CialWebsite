import { useDevice } from "../../hooks/useDevice";
import ServicesMobile from "./services_mobile";
import ServicesDesktop from "./services_desktop";

const Services = () => {
  const { isMobile } = useDevice();
  return isMobile ? <ServicesMobile /> : <ServicesDesktop />;
};

export default Services;

