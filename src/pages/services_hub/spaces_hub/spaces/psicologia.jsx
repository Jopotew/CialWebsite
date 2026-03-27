import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./psicologia_mobile";
import Desktop from "./psicologia_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
