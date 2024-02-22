import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CelebrationBakes.css'; // Import this CSS file for custom styling

const CelebrationBakes = ({ images, names }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slider-item ${hoveredIndex === index ? 'hovered' : ''}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Customize the image container with a border and shadow */}
          <div className="image-container">
            <img src={image} alt={`Image ${index + 1}`} className="slider-image" />
          </div>
          <p className="image-name">{names[index]}</p>
        </div>
      ))}
    </Slider>
  );
};

export default CelebrationBakes;
