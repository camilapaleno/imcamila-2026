"use client"

import Image from "next/image";
import Link from 'next/link'
import styles from "@/page.module.css";
import '@/app/globals.css';
import dtnav from "@/image/dt_nav.png";
import dtsky from "@/image/dt_sky.jpg";
import dtmtn from "@/image/dt_mtn.png";
import squarespace from "@/image/squarespace_logo.png";
import nextjs from "@/image/nextjs_logo.png";
import react from "@/image/react_logo.png";
import shopify from "@/image/shopify_logo.png";
import adobe from "@/image/adobe_logo.png";
import lottie from "@/image/lottie_logo.png";
import blender from "@/image/blender_logo.png";
import background from "@/image/bg_6.png";
import { Parallax, ParallaxBanner, BannerLayer, ParallaxProvider } from 'react-scroll-parallax';

export default function Home() {
  return (
    <div className="home" style={{backgroundImage: "url(" + background.src + ")"}}>
      
      <section>
        <h1>Bridging web development and <span>brand design</span>.</h1>
      </section>

      <div className="hero">
        <div className="desktop">
          <Image src={dtnav} className="dtnav" alt=""/>
          <ParallaxProvider>
          <ParallaxBanner
            layers={[
              { 
                image: dtsky.src,
                translateY: [0, 50],
                opacity: [1, 0.3],
                scale: [1.05, 1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true
              },
              { 
                translateY: [0, 30],
                scale: [1, 1.05, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div className="hello">
                    <span>hello world!</span>
                  </div>
                )
              },
              {
                image: dtmtn.src,
                translateY: [0, 15],
                scale: [1, 1.1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true
              },
              {
                opacity: [0, 1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: <div className="dtgradient" />
              },
            ]}
            className="aspect-[2/1] dthero"
          />
          </ParallaxProvider>
          <br></br>
        </div>
      </div>

      <section>
        <br/><br/>
        <h2>I work with web builders or javascript frameworks for <span>websites</span> and Adobe CS, Lottie, and Blender for <span>graphic creation</span>.</h2>
        <br/><br/>
      </section>

      <section>
        <div className="boxes">
          <div className="box">
            <div>
              <h3>web builders for businesses and e-commerce stores</h3>
              <p>Ideal if you're looking for a quick, professional website without the need for custom coding. With drag-and-drop tools and pre-designed templates, we can launch your site quickly and efficiently. Web builders work well for businesses ranging from independents and small businesses, to large e-commerce stores that need an attractive, functional site without extensive customization. These platform subscriptions include hosting, domain management, and basic SEO tools.</p>
            </div>
            <div>
              <div className="tools">
                <Image src={shopify} width={120} alt=""/>
                <Image src={squarespace} width={200} alt=""/>
              </div>
              <div>
                <Link href='/portfolio/builders'>see portfolio</Link>
              </div>              
            </div>
          </div>
        <div className="box">
          <div>
            <h3>frontend development for web applications</h3>
            <p> If you require a more complex, scalable website or web application, I provide full custom development using javascript frameworks. This gives you complete control over design, functionality, and performance. It’s the right solution for businesses looking for a unique, highly optimized, and future-ready site.</p>            
          </div>
          <div>
            <div className="tools">
                <Image src={nextjs} width={120} alt=""/>
                <Image src={react} width={50} alt=""/>
            </div>
            <div>
              <Link href='/portfolio/development'>see portfolio</Link>
            </div>            
          </div>
        </div>
        <div className="box">
          <div>
            <h3>2D and 3D graphic creation</h3>
            <p>Your website and branding isn’t complete without visual components. I create a variety of visual content, ranging from 3D models to photography.</p>            
          </div>
          <div>
            <div className="tools">
                <Image src={adobe} width={40} alt=""/>
                <Image src={lottie} width={40} alt=""/>
                <Image src={blender} width={120} alt=""/>
            </div>
            <div>
              <a href="https://www.behance.net/camilapaleno1" target="_blank">
                behance portfolio
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline className="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line className="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
                </svg> 
              </a>
              <a href="https://www.instagram.com/artbycameela/" target="_blank">
                instagram
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline className="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line className="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a>
            </div>            
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
