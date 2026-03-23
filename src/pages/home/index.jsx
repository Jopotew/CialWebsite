import HeroSlider from "../../components/mobile/sections/hero_slider";
import AboutSection from "../../components/mobile/sections/about_section";
import TeamSection from "../../components/mobile/sections/team_section";
import ServicesSection from "../../components/mobile/sections/services_section";
import NewsSection from "../../components/mobile/sections/news_section";
import Footer from "../../components/mobile/sections/footer";


import noticia_img from "../../assets/noticia2.png";
import { home_text } from "../../textos/home";

const slides = [
  {
    url: noticia_img,
    title: home_text.slider.slide1.titulo,
    subtitle: home_text.slider.slide1.texto,
  },
  {
    url: noticia_img,
    title: home_text.slider.slide2.titulo,
    subtitle: home_text.slider.slide2.texto,
  },
  {
    url: noticia_img,
    title: home_text.slider.slide3.titulo,
    subtitle: home_text.slider.slide3.texto,
  },
];

const Home = () => {
  return (
    <div className="home_container">
      <HeroSlider slides={slides} />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Home;