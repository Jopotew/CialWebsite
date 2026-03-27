import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./audiologia_mobile";
import Desktop from "./audiologia_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
