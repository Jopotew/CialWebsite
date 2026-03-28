import HeroSlider from "../../components/desktop/sections/hero_slider";
import AboutSection from "../../components/desktop/sections/about_section";
import TeamSection from "../../components/desktop/sections/team_section";
import ServicesSection from "../../components/desktop/sections/services_section";
import NewsSection from "../../components/desktop/sections/news_section";
import Footer from "../../components/desktop/sections/footer";

import slider1 from "../../assets/home/mini1.png";
import slider2 from "../../assets/home/mini2.jpg";
import slider3 from "../../assets/home/mini4.jpg";

import { home_text } from "../../textos/home";

const slides = [
  {
    url: slider1,
    title: home_text.slider.slide1.titulo,
    subtitle: home_text.slider.slide1.texto,
  },
  {
    url: slider2,
    title: home_text.slider.slide2.titulo,
    subtitle: home_text.slider.slide2.texto,
  },
  {
    url: slider3,
    title: home_text.slider.slide3.titulo,
    subtitle: home_text.slider.slide3.texto,
  },
];

const HomeDesktop = () => {
  return (
    <div className="home-desktop">
      <HeroSlider slides={slides} />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default HomeDesktop;
