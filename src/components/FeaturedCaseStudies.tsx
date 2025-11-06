"use client"

import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";
import { useState, useRef } from "react";

export default function FeaturedCaseStudies() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter only featured case studies
  const featuredStudies = caseStudies.filter((study) => study.featured);

  if (featuredStudies.length === 0) {
    return null; // Don't render if no featured case studies
  }

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = 450; // Approximate width of one card + gap
    const newPosition = direction === 'left'
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newPosition);
  };

  return (
    <section className="featured-case-studies">
      <div className="featured-case-studies-header">
        <h2>Case studies from creative teams.</h2>
        <p className="featured-subtitle">See how professionals across film, fashion, branding, and design are using FLORA.</p>
      </div>

      <div className="case-studies-gallery-container">
        <button
          className="gallery-nav-btn left"
          onClick={() => scroll('left')}
          disabled={scrollPosition === 0}
        >
          ←
        </button>

        <div className="case-studies-gallery" ref={scrollContainerRef}>
          {featuredStudies.map((study) => (
            <Link
              href={`/case-studies/${study.id}`}
              key={study.id}
              className="case-study-glass-card"
            >
              <div className="card-image-container">
                <Image
                  src={study.coverImage}
                  alt={study.title}
                  fill
                  className="card-image"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="card-tools-overlay">
                {study.tools && study.tools.split(',').map((tool, index) => (
                  <span key={index} className="card-tools">{tool.trim()}</span>
                ))}
              </div>

              <div className="card-info-overlay">
                <div className="card-glass-bg"></div>
                <div className="card-text-content">
                  <h3 className="card-title">{study.title}</h3>
                  <p className="card-description">{study.shortDescription}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <button
          className="gallery-nav-btn right"
          onClick={() => scroll('right')}
        >
          →
        </button>
      </div>
    </section>
  );
}
