import SliderImport from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/hero_slider.css";

const Slider = SliderImport.default ?? SliderImport;

const HeroSlider = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: true,
  };

  return (
    <section className="hero-slider-desktop">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="hero-slider-desktop__slide">
            <img
              src={slide.url}
              alt={slide.title}
              className="hero-slider-desktop__img"
            />
            <div className="hero-slider-desktop__overlay">
              <div className="hero-slider-desktop__text">
                <h1 className="hero-slider-desktop__title">{slide.title}</h1>
                <p className="hero-slider-desktop__subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;
