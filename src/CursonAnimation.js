import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const glitter = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
`;

const GlitterParticle = styled.div`
  width: 10px;
  height: 10px;
  background: gold;
  border-radius: 90%;
  position: absolute;
  pointer-events: none;
  animation: ${glitter} 0.5s both;
`;

const CursorAnimation = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = (e) => {
      const particle = (
        <GlitterParticle
          key={particles.length}
          style={{
            left: e.clientX + "px",
            top: e.clientY + "px",
          }}
        />
      );

      setParticles((prev) => [...prev, particle]);

      setTimeout(() => {
        setParticles((prev) => prev.slice(1));
      }, 600); // Remove particles after 1 second
    };

    window.addEventListener("mousemove", createParticle);
    return () => {
      window.removeEventListener("mousemove", createParticle);
    };
  }, [particles]);

  return <>{particles}</>;
};

export default CursorAnimation;
