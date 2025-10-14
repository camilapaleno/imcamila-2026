import '@/app/globals.css';
import React, { useState } from "react";

const Project = ({ data, closeModal }) => {

  const [isActive, setActive] = useState(true);


  return (
    <>
    <div className="modal">
      <div className='frame'>
        <div className="project-layout">

          {/* Left Info Panel */}
          <div className="project-info-panel">
            <button onClick={closeModal} className="back-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>

            <div className="info">
              <h1>{data.title}</h1>
              <p>{data.long}</p>

              {data.website === 'none' ? null
              : <a className="see-full-site"
              href={data.website}
              target="_blank"
              rel="noreferrer">See full site</a>  }

              {data.github === 'none' ? null
              : <a className="see-full-site"
              href={data.github}
              target="_blank"
              rel="noreferrer">See code</a> }
            </div>
          </div>

          {/* Right Content Area - Iframe, Video, or Gallery */}
          {data.embed === 'none' ? null :
            <div className="project-iframe-container">
              <div className="iframe-toggle-buttons">
                <button
                  onClick={() => setActive(true)}
                  className={isActive ? "active" : ""}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                  </svg>
                </button>
                <button
                  onClick={() => setActive(false)}
                  className={!isActive ? "active" : ""}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </button>
              </div>

              <div className="iframe-display-wrapper">
                <iframe
                  title="iframe"
                  src={data.embed}
                  className={isActive ? "desktop" : "mobile"}>
                </iframe>
              </div>
            </div>
          }

          {data.youtube === 'none' ? null :
            <div className="project-content-container">
              <div className="content-display-wrapper">
                <iframe title="video" src={data.youtube} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>
          }

          {data.gallery === 'none' ? null :
            <div className="project-content-container">
              <div className="content-display-wrapper gallery">
                {data.gallery.map((image) =>
                  <img key={image} src={image} alt="gallery"/>
                )}
              </div>
            </div>
          }
        </div>
      </div>
      </div>
    </>
  );
}

export default Project;