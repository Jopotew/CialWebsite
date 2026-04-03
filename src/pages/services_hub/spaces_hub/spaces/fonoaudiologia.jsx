import { useDevice } from "../../../../hooks/useDevice";
import Mobile from "./fonoaudiologia_mobile";
import Desktop from "./fonoaudiologia_desktop";

const Page = () => {
  const { isMobile } = useDevice();
  return isMobile ? <Mobile /> : <Desktop />;
};

export default Page;
