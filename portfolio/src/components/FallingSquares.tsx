"use client";

import { useEffect, useState, useRef } from 'react';

const FallingSquares = () => {
  const [squares, setSquares] = useState([]);
  const animationRef = useRef(null);
  const creationIntervalRef = useRef(null);

  const colorPalette = [
    "#7f1d1d", 
    "#991b1b", 
    "#b91c1c", 
    "#dc2626", 
    "#ef4444", 
  ];  

  const createSquare = () => {
    const size = Math.floor(Math.random() * 120) + 10;
    const left = Math.random() * window.innerWidth;
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    return { size, left, color, top: -size };
  };

  useEffect(() => {
    const startSquareCreation = () => {
      if (!creationIntervalRef.current) {
        creationIntervalRef.current = setInterval(() => {
          setSquares(prev => [...prev, createSquare()]);
        }, 1000);
      }
    };

    const stopSquareCreation = () => {
      if (creationIntervalRef.current) {
        clearInterval(creationIntervalRef.current);
        creationIntervalRef.current = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        stopSquareCreation();
      } else if (document.visibilityState === "visible") {
        startSquareCreation();
      }
    };

    if (document.visibilityState === "visible") {
      startSquareCreation();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopSquareCreation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    const fallingSpeed = 0.5;

    const animate = () => {
      setSquares(prevSquares =>
        prevSquares
          .map(square => ({ ...square, top: square.top + fallingSpeed }))
          .filter(square => square.top < window.innerHeight + square.size)
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      } else if (document.visibilityState === "visible" && !animationRef.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };

    if (document.visibilityState === "visible") {
      animationRef.current = requestAnimationFrame(animate);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div className="-z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {squares.map((square, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: square.size,
            height: square.size,
            backgroundColor: square.color,
            top: square.top,
            left: square.left,
            borderRadius: 4,
            opacity: 0.2,
            willChange: 'transform, opacity',
          }}
        />
      ))}
    </div>
  );
};

export default FallingSquares;
