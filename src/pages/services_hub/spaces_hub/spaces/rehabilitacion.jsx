import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./rehabilitacion_mobile";
import Desktop from "./rehabilitacion_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
