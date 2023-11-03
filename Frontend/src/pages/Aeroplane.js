import React from 'react';
import styled, { keyframes } from 'styled-components';

const diagonalFly = keyframes`
  0% {
    transform: translate(-100px, 50vh) scale(1);
  }
  100% {
    transform: translate(100vw, -130vh) rotate(25deg) scale(15);
  }
`;

const FlyingPlane = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  transform: translate(-100px, 100vh) rotate(0deg);
  animation: ${diagonalFly} 2.5s linear forwards;
  width: 60px;
  height: 60px;
  text-shadow: 2px 2px 4px black;

  /* Other styles */

  /* Add 3D effect */
  perspective: 500px;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    transform: translate(-3px, -3px);
  }

  &::before {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }

  &::after {
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.8);
  }
`;

const AirplaneAnimation = () => {
  return (
    <FlyingPlane src="./media/airplane5.png" alt="Flying Airplane" />
  );
};

export default AirplaneAnimation;
