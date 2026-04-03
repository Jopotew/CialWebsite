import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./psicopedagogia_mobile";
import Desktop from "./psicopedagogia_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
