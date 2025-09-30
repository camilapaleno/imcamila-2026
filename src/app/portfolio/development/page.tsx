"use client"

import React, { useState, useEffect } from "react";
import {builders} from '@/data/builders';
import {development} from '@/data/development';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import { motion } from "motion/react"
import { easeInOut } from "motion";


function Development() {
  const [filter, setFilter] = useState("all");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    // Combine both builders and development projects
    const allProjects = [...builders, ...development];
    setProjects(allProjects);

    // Extract all unique tags
    const tags = new Set<string>();
    allProjects.forEach(project => {
      project.category.forEach((tag: string) => {
        if (tag !== "all") {
          tags.add(tag);
        }
      });
    });
    setAllTags(Array.from(tags).sort());
  }, []);

  useEffect(() => {
    setProjects([]);

    const allProjects = [...builders, ...development];
    const filtered = allProjects.map(p => ({
      ...p,
      filtered: p.category.includes(filter)
    }));
    setProjects(filtered);
  }, [filter]);

  const [data, setData] = useState(null);
  const [visible, setVisible] = useState(false);

  const toggleItem = (item = null) => {
    setData(item);
    setVisible(item !== null);
  };

  return (
    <>
      <Nav />

      <div className="portfolio">

        <section className="title">
          <br/><br/>
          <h2>
            I work with web builders and Javascript frameworks for <span>websites</span> and Adobe CS, Lottie, and Blender for <span>graphic creation</span> to create a web site or application that tells your story.
          </h2>
        </section>

        <div className="filter-container">
          <div className="filter-tags">
            {allTags.map(tag => (
              <button
                key={tag}
                className={`filter-tag ${filter === tag ? 'selected' : ''}`}
                onClick={() => setFilter(tag)}
              >
                {tag}
                {filter === tag && (
                  <span className="clear-filter-inline" onClick={(e) => {
                    e.stopPropagation();
                    setFilter("all");
                  }}>
                    ✕
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio__container">
          <ul>
            {projects.map(item =>
              item.filtered === true ?
              <li key={item.name} className='card'>
                  <button

                    className='card_path'
                    onClick={() => toggleItem(item)}
                    >
                    <h1>{item.title}</h1>
                    <p>{item.short}</p>
                    <div className="card_preview">
                      <img src={item.preview.src} alt={item.name} />
                      <img src={item.overlay.src} alt={item.name} />
                    </div>

                    <span>{item.tools}</span>
                  </button>

              </li> : ""
            )}
          </ul>
        </div>

        {visible === true && data !== null && (
              <Project
              data={data}
              closeModal={() => toggleItem()} />
            )}

      </div>

      <Footer />

    </>
  );
}

export default Development;