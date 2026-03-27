import { useDevice } from "../../hooks/useDevice";
import ContactoMobile from "./contact_mobile";
import ContactoDesktop from "./contact_desktop";

const Contacto = () => {
  const { isMobile } = useDevice();
  return isMobile ? <ContactoMobile /> : <ContactoDesktop />;
};

export default Contacto;
