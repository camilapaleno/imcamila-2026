"use client"

import React, { useState, useEffect } from "react";
import {builders} from '@/data/builders';
import Header from "@/components/Header";
import Project from "@/components/Project";


function Builders() {
  const [filter, ] = useState("all");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setProjects(builders);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = builders.map(p => ({
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
      
      <div className="portfolio">

        {Header({
            title: 'web builders',
            description: 'Using platforms like Squarespace, I can create professional, visually appealing websites quickly. These platforms offer drag-and-drop functionality and pre-designed templates, so after Ive set everything up, youll be able to These platforms are more budget-friendly and ideal for businesses or individuals looking to establish a professional online presence without needing advanced features or custom development. While Squarespace provides many design and layout options, customization is limited to what the platform offers. It’s great for small businesses, portfolios, blogs, or personal websites, where basic functionality and aesthetics are key. Hosting, domain management, security, and basic SEO tools are built-in, so you can focus on your content without worrying about the technical side.',
        })}

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

    </>
  );
}

export default Builders;