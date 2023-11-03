import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0.6;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  margin-top: 155px;
  margin-bottom: 0px;
  justify-content: center;
`;

const SliderImage = styled.img`
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
  animation: ${slideLeft} 0.5s ease-in-out;

  &.large-image {
    transform: scale(1.5);
   height:500px
    z-index: 2;
  }

  &.small-image {
    transform: scale(0.6);
   z-index:-1;
    opacity: 0.6;
  }
`;

const AnimatedSlider = ({ url1, url2, url3 }) => {
  const images = [url1, url2, url3];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <SliderContainer>
      <SliderImage
        className={`slider-image small-image`}
        src={images[(activeIndex + images.length - 1) % images.length]}
        alt={`Image ${activeIndex}`}
      />
      <SliderImage
        className={`slider-image large-image`}
        src={images[activeIndex]}
        alt={`Image ${activeIndex + 1}`}
      />
      <SliderImage
        className={`slider-image small-image`}
        src={images[(activeIndex + 1) % images.length]}
        alt={`Image ${activeIndex + 2}`}
      />
    </SliderContainer>
  );
};

export default AnimatedSlider;
