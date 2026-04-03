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
    arrows: false,
  };

  return (
    <section className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="hero-slider__slide">
            <img
              src={slide.url}
              alt={slide.title}
              className="hero-slider__img"
            />
            {/* Gradiente + texto */}
            <div className="hero-slider__overlay">
              <div className="hero-slider__text">
                <h1 className="hero-slider__title">{slide.title}</h1>
                <p className="hero-slider__subtitle">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;