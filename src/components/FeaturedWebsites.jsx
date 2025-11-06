"use client"

import '@/app/globals.css';
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedWebsites = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef(null);

  // Fixed dimensions for iframe content
  const DESKTOP_WIDTH = 1430;
  const DESKTOP_HEIGHT = 780;
  const MOBILE_WIDTH = 430;
  const MOBILE_HEIGHT = 920;

  useEffect(() => {
    const calculateScale = () => {
      if (!wrapperRef.current) return;

      const wrapper = wrapperRef.current;
      const wrapperWidth = wrapper.clientWidth;
      const wrapperHeight = wrapper.clientHeight;

      // Get the target dimensions based on active state
      const targetWidth = isDesktop ? DESKTOP_WIDTH : MOBILE_WIDTH;
      const targetHeight = isDesktop ? DESKTOP_HEIGHT : MOBILE_HEIGHT;

      // Calculate scale to fit within wrapper while maintaining aspect ratio
      const scaleX = wrapperWidth / targetWidth;
      const scaleY = wrapperHeight / targetHeight;
      const newScale = Math.min(scaleX, scaleY, 1); // Don't scale up beyond 100%

      setScale(newScale);
    };

    calculateScale();
    window.addEventListener('resize', calculateScale);

    return () => window.removeEventListener('resize', calculateScale);
  }, [isDesktop]);

  const currentProject = projects[activeProject];

  return (
    <section className="featured-websites">
      <div className="featured-websites-header">
        <h2>Website Examples</h2>
        <Link href="/portfolio/development" className="see-all-link">
          See All
        </Link>
      </div>

      <div className="featured-websites-content">
        {/* Left Thumbnails */}
        <div className="website-thumbnails">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`thumbnail ${activeProject === index ? 'active' : ''}`}
            >
              <Image
                src={project.preview}
                alt={project.title}
                width={150}
                height={150}
                className="thumbnail-image"
              />
            </button>
          ))}
        </div>

        {/* Right Preview Area */}
        <div className="website-preview-container">
          <div className="iframe-toggle-buttons">
            <button
              onClick={() => setIsDesktop(true)}
              className={isDesktop ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
              </svg>
            </button>
            <button
              onClick={() => setIsDesktop(false)}
              className={!isDesktop ? "active" : ""}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
              </svg>
            </button>
          </div>

          <div className="iframe-display-wrapper" ref={wrapperRef}>
            <div
              className="iframe-scale-container"
              style={{
                width: isDesktop ? `${DESKTOP_WIDTH}px` : `${MOBILE_WIDTH}px`,
                height: isDesktop ? `${DESKTOP_HEIGHT}px` : `${MOBILE_HEIGHT}px`,
                transform: `scale(${scale})`,
              }}
            >
              <iframe
                title="website-preview"
                src={currentProject.embed}
                className={isDesktop ? "desktop" : "mobile"}
                style={{
                  width: isDesktop ? `${DESKTOP_WIDTH}px` : `${MOBILE_WIDTH}px`,
                  height: isDesktop ? `${DESKTOP_HEIGHT}px` : `${MOBILE_HEIGHT}px`,
                }}>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWebsites;
