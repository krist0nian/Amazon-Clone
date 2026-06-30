import React, { useState, useEffect } from 'react'
import './HeroSlider.css'; // Import your CSS file

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, image: './primevideoslider.jpg', },
    { id: 2, image: './primedeals.jpg', },
    { id: 3, image: './primeday.jpg', },
    { id: 4, image: './herosliderimage.jpeg', },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <h2>{slide.caption}</h2>
        </div>
      ))}
    </div>
  );
};

export default HeroSlider;
