import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./gallery.css";

function GallerySlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section className="owner-gallery">
      <Slider {...settings} className="gallery-slider">
        {images.map(({ src, caption }, idx) => (
          <div key={idx} className="gallery-slide">
            <img src={src} alt={caption} />
            <p>{caption}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
}

// Flechas personalizadas
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-arrow right" onClick={onClick}>
      <FaArrowRight />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="slider-arrow left" onClick={onClick}>
      <FaArrowLeft />
    </div>
  );
}

export default GallerySlider;
