import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./psicomotricidad_mobile";
import Desktop from "./psicomotricidad_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
