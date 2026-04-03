import { useDevice } from "../../hooks/useDevice";
import HomeMobile from "./home_mobile";
import HomeDesktop from "./home_desktop";

const Home = () => {
  const { isMobile } = useDevice();
  return isMobile ? <HomeMobile /> : <HomeDesktop />;
};

export default Home;
