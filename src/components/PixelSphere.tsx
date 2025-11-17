"use client"

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useTheme } from '@/context/ThemeContext';

interface Pixel {
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  initialPos: THREE.Vector3;
}

export default function PixelSphere() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Use orthographic camera for zero perspective distortion
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 800;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      1,
      2000
    );
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create pixel sphere with particles throughout volume
    const pixelSize = 2;
    const sphereRadius = 600; // Increased sphere size to take up more screen
    const pixels: Pixel[] = [];
    const numPixels = 100;

    // Generate pixels randomly distributed within the sphere
    for (let i = 0; i < numPixels; i++) {
      // Random position within sphere using rejection sampling
      let x, y, z, distance;
      do {
        x = (Math.random() - 0.5) * sphereRadius * 2;
        y = (Math.random() - 0.5) * sphereRadius * 2;
        z = (Math.random() - 0.5) * sphereRadius * 2;
        distance = Math.sqrt(x * x + y * y + z * z);
      } while (distance > sphereRadius);

      // Create pixel (small box)
      const geometry = new THREE.BoxGeometry(pixelSize, pixelSize, pixelSize);
      // Color based on theme: dark text color (#463535) for light mode, white for dark mode
      const pixelColor = theme === 'light' ? 0x7dd926 : 0xffffff;
      const material = new THREE.MeshBasicMaterial({
        color: pixelColor,
        transparent: false,
        opacity: 1.0
      });
      const pixel = new THREE.Mesh(geometry, material);
      pixel.position.set(x, y, z);

      // Random velocity for flowing movement
      const velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2
      );

      scene.add(pixel);
      pixels.push({
        mesh: pixel,
        velocity: velocity,
        initialPos: new THREE.Vector3(x, y, z)
      });
    }

    // Mouse drag controls
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = e.clientX - previousMouseRef.current.x;
      const deltaY = e.clientY - previousMouseRef.current.y;

      rotationVelocityRef.current.y = deltaX * 0.01;
      rotationVelocityRef.current.x = deltaY * 0.01;

      previousMouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation
    let animationId: number;
    let time = 0;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      time += 0.005;

      // Apply rotation velocity with damping
      rotationRef.current.x += rotationVelocityRef.current.x;
      rotationRef.current.y += rotationVelocityRef.current.y;

      // Damping
      rotationVelocityRef.current.x *= 0.95;
      rotationVelocityRef.current.y *= 0.95;

      // Rotate the entire scene
      scene.rotation.x = rotationRef.current.x;
      scene.rotation.y = rotationRef.current.y;

      // Animate pixels flowing around slowly
      pixels.forEach((pixelData) => {
        const pixel = pixelData.mesh;
        const vel = pixelData.velocity;

        // Move pixel
        pixel.position.x += vel.x;
        pixel.position.y += vel.y;
        pixel.position.z += vel.z;

        // Keep pixels within sphere bounds
        const distance = Math.sqrt(
          pixel.position.x ** 2 +
          pixel.position.y ** 2 +
          pixel.position.z ** 2
        );

        if (distance > sphereRadius) {
          // Bounce back towards center
          const normal = pixel.position.clone().normalize();
          vel.reflect(normal);
        }

        // Add slight random drift
        vel.x += (Math.random() - 0.5) * 0.01;
        vel.y += (Math.random() - 0.5) * 0.01;
        vel.z += (Math.random() - 0.5) * 0.01;

        // Limit velocity
        const speed = vel.length();
        if (speed > 0.3) {
          vel.normalize().multiplyScalar(0.3);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = frustumSize * aspect / -2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationId);
      if (containerRef.current && renderer.domElement.parentNode === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      pixels.forEach(pixelData => {
        pixelData.mesh.geometry.dispose();
        (pixelData.mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full h-screen"
      style={{ zIndex: 1, cursor: 'grab', pointerEvents: 'auto' }}
    />
  );
}
