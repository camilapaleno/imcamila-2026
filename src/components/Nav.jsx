import Link from 'next/link'
import '@/app/globals.css';
import cam from '@/image/cam.png'

function Nav() {

  return (
    <>
      <div className="nav">
        <div className="top">
          <Link href={"/"}><img src={cam.src} /></Link>
            {/*<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 359.54 250.73" >
            <path className="st0" d="M93.81,15.11c-17.43,0.22-30.45-2.24-41.7,9.27c-10.42,10.65-1.49,58.2-6.94,70.99
            C35.67,117.66,6.4,125.36,6.4,125.36s36.32,11.05,39.1,31.58c3.61,26.64-3.16,43.25,4.6,64.08c5.76,15.46,29.52,11.54,43.71,11.54"
            />
            <path className="st0" d="M265.19,16.95c17.43,0.22,30.45-2.24,41.7,9.27c10.42,10.65,1.49,58.2,6.94,70.99
            c9.51,22.29,38.77,29.98,38.77,29.98s-36.32,11.05-39.1,31.58c-3.61,26.64,3.16,43.25-4.6,64.08
            c-5.76,15.46-29.52,11.54-43.71,11.54"/>
            <path className="st0" d="M124.5,120.72c-1.78,69.51,116.06,72.72,116.06,0"/>
            <circle cx="130" cy="80" r="15" />
            <circle cx="200" cy="80" r="15" />
          </svg> */}
        </div>

        <div className="links">
          <ul>
            {/* <li>
              <a href={resume}>resume
              <svg className="dwnld" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li> */}
            <li>
              <a href="https://github.com/camilapaleno" target="_blank" rel="noreferrer">github
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/camilapaleno/" target="_blank" rel="noreferrer">linkedin
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
            <li>
              <a href="mailto:hi@imcamila.dev">email
              <svg className="eml" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline class="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line class="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

    </>
  );
}

export default Nav;