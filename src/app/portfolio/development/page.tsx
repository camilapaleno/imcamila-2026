"use client"

import {development} from '@/data/development';
import Header from "@/components/Header";
import Project from "@/components/Project";
import { useState, useEffect } from 'react';

function Development() {
  const [filter, setFilter] = useState("all");
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    setProjects(development);
  }, []);

  useEffect(() => {
    setProjects([]);

    const filtered = development.map(p => ({
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
            title: 'Web Development',
            description: 'Complete Flexibility: When your project demands more control over design, functionality, or performance, I provide custom web development using JavaScript libraries like Next.js. This approach allows for tailored features, unique layouts, and specific integrations that match your exact requirements. Advanced Performance & SEO: Technologies like Next.js enable features like server-side rendering (SSR), static site generation (SSG), and API integration, making your site faster and more SEO-friendly. These are important factors for businesses that rely heavily on web traffic and user experience. Scalable Solutions: If your business is growing or requires advanced functionality (e.g., e-commerce, web apps, or complex workflows), custom development is the best option. It’s built to scale and can handle large amounts of traffic or complex user interactions. Ongoing Support: Custom development projects often require ongoing updates, maintenance, and optimization. I offer support for future enhancements, ensuring your website stays current as your business evolves.',
        })}

{/* <div className="portfolio__labels">
          <button 
            active={filter === "all"} 
            onClick={() => setFilter("all")}
            className={filter === "all" ? 'selected-label' :'default-label'}
          >
            All
          </button>
          <button
            active={filter === "vanilla javascript"}
            onClick={() => setFilter("vanilla javascript")}
            className={filter === "vanilla javascript" ? 'selected-label' :'default-label'}
          >
            Vanilla JS
          </button>
          <button
            active={filter === "react"}
            onClick={() => setFilter("react")}
            className={filter === "react" ? 'selected-label' :'default-label'}
          >
            React.JS
          </button>
          <button
           
            active={filter === "3d"}
            onClick={() => setFilter("3d")}
            className={filter === "3d" ? 'selected-label' :'default-label'}
          >
            3D
          </button>
        </div> */}

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

export default Development;