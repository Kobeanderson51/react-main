import React, { useEffect, useRef, useCallback } from "react";
import styled, { keyframes, css } from "styled-components";

// Glow effect for cursor
const glow = keyframes`
  0% {
    box-shadow: 0 0 6px rgba(112, 128, 144, 0.6); /* Slate gray glow */
  }
  50% {
    box-shadow: 0 0 20px rgba(112, 128, 144, 0.8); /* Brighter slate gray glow */
  }
  100% {
    box-shadow: 0 0 6px rgba(112, 128, 144, 0.6); /* Slate gray glow */
  }
`;

// Cursor style with gradient and glow effect
const Cursor = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px; /* Increased size for better visibility */
  height: 20px;
  background: linear-gradient(45deg, #708090, #2f4f4f); /* Slate gray gradient */
  border: 2px solid #a9a9a9; /* Light slate gray border for contrast */
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9999;
  transition: transform 0.1s, background 0.3s, border 0.3s;
  animation: ${glow} 1.5s ease-in-out infinite;
`;

// Trail animation
const trailAnimation = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.6;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.6);
    opacity: 0;
  }
`;

// Define animation using the css helper
const animatedTrailAnimation = css`
  ${trailAnimation} 0.5s ease-out forwards;
`;

// Trail style with gradient and improved transparency
const Trail = styled.div<{ isActive: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px; /* Increased size for consistency with cursor */
  height: 20px;
  background: linear-gradient(45deg, #708090, #2f4f4f); /* Same gradient as cursor */
  border: 2px solid #708090; /* Slate gray border */
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  z-index: 9998;
  opacity: ${props => (props.isActive ? "0.6" : "0")};
  animation: ${props => (props.isActive ? animatedTrailAnimation : "none")};
`;

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRefs = useRef<(HTMLDivElement | null)[]>([]);

  const moveCursor = useCallback((e: MouseEvent) => {
    const { clientX: x, clientY: y } = e;
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }

    trailRefs.current.forEach((trail, index) => {
      if (trail) {
        setTimeout(() => {
          trail.style.transform = `translate(${x}px, ${y}px)`;
          trail.style.opacity = "0.6";
          // Trigger animation by updating the state
          trail.classList.add("animate");
          // Remove the class after the animation ends
          setTimeout(() => {
            trail.classList.remove("animate");
          }, 500); // Animation duration
        }, index * 50); // Slightly longer delay for a more pronounced trail effect
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, [moveCursor]);

  return (
    <>
      <Cursor ref={cursorRef} />
      {Array.from({ length: 7 }).map((_, i) => (
        <Trail
          key={i}
          ref={(el) => { trailRefs.current[i] = el; }}
          isActive={false} // Initially not active
        />
      ))}
    </>
  );
};

export default CustomCursor;
