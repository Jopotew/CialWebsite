import { useDevice } from "../../../hooks/useDevice";
import BlogMobile from "./blog_mobile";
import BlogDesktop from "./blog_desktop";

const Blog = () => {
  const { isMobile } = useDevice();
  return isMobile ? <BlogMobile /> : <BlogDesktop />;
};

export default Blog;
