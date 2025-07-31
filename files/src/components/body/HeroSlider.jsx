import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSlider.css';

function HeroSlider({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-bg" />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <p>{slide.text}</p>

              {/* Mostrar botón solo si hay link y `showButton` no es false */}
              {slide.link && slide.showButton !== false && (
                <a href={slide.link} className="hero-button">
                  Conocer más
                </a>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSlider;
