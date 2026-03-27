import { useDevice } from "../../../hooks/useDevice";
import NewsMobile from "./news_mobile";
import NewsDesktop from "./news_desktop";

const News = () => {
  const { isMobile } = useDevice();
  return isMobile ? <NewsMobile /> : <NewsDesktop />;
};

export default News;
