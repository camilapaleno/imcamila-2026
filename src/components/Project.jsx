import '@/app/globals.css';
import React, { useState } from "react";

const Project = ({ data, closeModal }) => {
  
  const [isActive, setActive] = useState("false");


  return (
    <>
    <div className="modal">
      <div className='frame'>
          <button onClick={closeModal} id="back">&#x2715;
          </button>
        <div className="head">


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


            {data.embed === 'none' ? null :
              <>
            <button onClick={()=>setActive(true)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
            </svg>
            </button>
                        <button onClick={()=>setActive(false)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
            </button>
            </>
            }
            
          </div>
        </div>

        
        {data.youtube === 'none' ? null :
          <div className="video-wrapper">
            <iframe title="iframe" src={data.youtube} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>        
        }

        {data.gallery === 'none' ? null :
            <div className="gallery-wrapper">
                {data.gallery.map((image) =>
                   <img key={image} src={image}/> 
                )}
            </div>    
        }

        {data.embed === 'none' ? null :
        <div className="iframe-wrapper">
        <iframe title="iframe" src={data.embed} className={isActive ? "desktop" : "mobile"}></iframe>
      </div>    
        }

          

        
      </div>
      </div>
    </>
  );
}

export default Project;