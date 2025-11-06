"use client"

import '@/app/globals.css';
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const FeaturedWebsitesBrowser = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(0);

  const currentProject = projects[activeProject];

  return (
    <section className="featured-websites-browser">
      <div className="featured-websites-header">
        <h2>Website Examples</h2>
        <Link href="/portfolio/development" className="see-all-link">
          See All
        </Link>
      </div>

      <div className="browser-mockup">
        {/* Browser Chrome */}
        <div className="browser-chrome">
          <div className="browser-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          {/* Browser Tabs */}
          <div className="browser-tabs">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`browser-tab ${activeProject === index ? 'active' : ''}`}
              >
                <Image
                  src={project.preview}
                  alt={project.title}
                  width={16}
                  height={16}
                  className="tab-favicon"
                />
                <span className="tab-title">{project.title}</span>
                {activeProject !== index && (
                  <span className="tab-close">×</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Browser Content Area */}
        <div className="browser-content">
          <div className="browser-url-bar">
            <div className="url-controls">
              <button className="url-button">←</button>
              <button className="url-button">→</button>
              <button className="url-button">↻</button>
            </div>
            <div className="url-input">
              <svg className="lock-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
              <span>{currentProject.embed}</span>
            </div>
          </div>

          <div className="iframe-display-wrapper">
            <iframe
              title="website-preview"
              src={currentProject.embed}
              className="browser-iframe">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWebsitesBrowser;
