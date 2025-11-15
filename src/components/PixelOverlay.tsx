"use client"

import React, { useEffect, useRef } from 'react';

export default function PixelOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePositionRef = useRef({ x: -1000, y: -1000 });
  const pixelGlowMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size - use device pixel ratio for crisp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const gridSize = 20; // Space between X's - closer together
    const glowRadius = 150;

    // Set font for rendering X's
    ctx.font = '14px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Sample the background gradient color
    const sampleBackgroundColor = (x: number, y: number) => {
      // Create gradient based on position - matching ParticleBackground gradient
      // Top of page = blue, middle = purple/pink, bottom fades out
      const gradientHeight = 700;
      const gradientCenter = window.innerHeight * 0.3; // Approximate gradient center

      const distanceFromTop = y;
      const normalizedY = distanceFromTop / gradientHeight;

      if (normalizedY < 0.3) {
        // Blue area (top)
        return { r: 38, g: 77, b: 217, base: 0.6 }; // #264dd9
      } else if (normalizedY < 0.7) {
        // Purple area (middle)
        return { r: 95, g: 38, b: 217, base: 0.4 }; // #5f26d9
      } else {
        // Fade out area (bottom)
        return { r: 150, g: 150, b: 200, base: 0.2 };
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const cols = Math.ceil(window.innerWidth / gridSize);
      const rows = Math.ceil(window.innerHeight / gridSize);

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = col * gridSize;
          const y = row * gridSize;

          // Calculate distance from mouse
          const distance = Math.sqrt(
            Math.pow(x - mousePositionRef.current.x, 2) +
            Math.pow(y - mousePositionRef.current.y, 2)
          );

          // Get background color for this position
          const bgColor = sampleBackgroundColor(x, y);

          // Create unique key for this character
          const charKey = `${row}-${col}`;
          let currentGlow = pixelGlowMap.current.get(charKey) || 0;

          if (distance < glowRadius) {
            // Character is within hover radius - set glow to maximum
            const glowIntensity = 1 - (distance / glowRadius);

            // Add wave effect - characters light up in a ripple pattern based on distance
            const time = Date.now() * 0.003;
            const wave = Math.sin(distance * 0.05 + time) * 0.5 + 0.5;

            // Add randomness per character for varied timing
            const charSeed = (row * 1000 + col) * 0.001;
            const randomDelay = Math.sin(charSeed) * 0.5 + 0.5;

            // Combine wave and random delay
            const finalIntensity = glowIntensity * wave * (0.5 + randomDelay * 0.5);

            // Update glow value
            currentGlow = Math.max(currentGlow, finalIntensity);
          }

          // Fade out the glow over time (streak effect)
          if (currentGlow > 0) {
            currentGlow *= 0.95; // Decay factor
            if (currentGlow < 0.01) currentGlow = 0;
            pixelGlowMap.current.set(charKey, currentGlow);

            // Draw glowing X with background-based color
            const alpha = bgColor.base * 0.3 + currentGlow * 0.7;
            ctx.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${alpha})`;
            ctx.fillText('×', x, y);
          } else {
            // Normal X - very dim, matching background
            pixelGlowMap.current.delete(charKey);
            ctx.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.base * 0.15})`;
            ctx.fillText('×', x, y);
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full"
      style={{ zIndex: 10, pointerEvents: 'none' }}
    />
  );
}
