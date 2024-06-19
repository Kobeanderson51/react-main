import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: background-color 0.2s, transform 0.1s;
`;

const trailAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`;

const Trail = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: #ffffff;
  border: 2px solid #000000;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9998;
  opacity: 0;
  animation: ${trailAnimation} 0.5s ease-out forwards;
`;

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }

      trailRefs.current.forEach((trail, index) => {
        if (trail) {
          setTimeout(() => {
            trail.style.transform = `translate(${x}px, ${y}px)`;
            trail.style.opacity = "1";
            trail.style.animation = "none";
            void trail.offsetWidth;
            trail.style.animation = `${trailAnimation} 0.5s ease-out forwards`;
          }, index * 50);
        }
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      {Array.from({ length: 5 }).map((_, i) => (
        <Trail key={i} ref={el => { trailRefs.current[i] = el; }} />
      ))}
    </>
  );
};

export default CustomCursor;
