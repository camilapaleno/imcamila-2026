"use client"

import Image from "next/image";
import Link from 'next/link'
import '@/app/globals.css';
import squarespace from "@/image/squarespace_logo.png";
import nextjs from "@/image/nextjs_logo.png";
import react from "@/image/react_logo.png";
import shopify from "@/image/shopify_logo.png";
import adobe from "@/image/adobe_logo.png";
import lottie from "@/image/lottie_logo.png";
import blender from "@/image/blender_logo.png";
import background from "@/image/bg_11.png";
import arra from "@/image/arra.png";
import hi from "@/image/wavey.gif";
import boogie from "@/image/dancey.gif";
import examples from "@/image/examples.jpg";
import { motion } from "motion/react"
import { easeInOut } from "motion";

export default function Home() {

  return (
    <div className="home" style={{backgroundImage: "url(" + background.src + ")"}}>
      
      <section className="hero">
        <h4>Hey! My name is Camila. <img className="hi" src={hi.src}/></h4>
        <br/>
        <h1>
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: 0, ease: easeInOut }}>I </motion.span> 
          
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .2, ease: easeInOut }}>connect</motion.span>
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .3, ease: easeInOut }}>web</motion.span> 
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .3, ease: easeInOut }}>development</motion.span> 
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .4, ease: easeInOut }}>with</motion.span> 
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .6, ease: easeInOut }}>brand</motion.span> 
          <motion.span initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: .6, ease: easeInOut }}>design.</motion.span> 
        </h1>
        <br/>
        <h4>Learn more about what I do:</h4>
        <br/>
        <img className="arra" src={arra.src}/>
        <br/><br/>
      </section>

      <img className="examples" src={examples.src}/>

      <section className="choose">
      <br/><br/><br/>
        <motion.h2 initial={{y: 100, opacity: 0}} animate={{ y: 0, opacity: 100 }} transition={{ duration: 0.6, delay: 2, ease: easeInOut }}>
          I work with web builders and Javascript frameworks for <span>websites</span> and Adobe CS, Lottie, and Blender for <span>graphic creation</span> to create a web site or application that tells your story.</motion.h2>
        <br/>
        <h4>Choose your own adventure:</h4>

      </section>

      <section id="choose">
        
        <div className="boxes">
        <div className="box">
          <div>
            <h3>brand design</h3>
            <p>I specialize in creating cohesive brand visuals that help businesses stand out. From custom logo design and photography to social media graphics and website visuals, I bring together every element of your brand’s identity. My focus is on consistency, creativity, and clarity — so your brand not only looks professional but also communicates your story effectively.</p>            
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
              {/* <a href="https://www.instagram.com/artbycameela/" target="_blank">
                instagram
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 227.71 225.85">
                <polyline className="st0" points="14.24,15.08 214.41,15.08 214.41,210.39 "/>  
                <line className="st0" x1="14.24" y1="210.39" x2="214.41" y2="15.08"/>
              </svg>
              </a> */}
            </div>            
          </div>
        </div>
          <div className="box">
            <img className="badge" src={boogie.src}/>
            <div>
              <h3>ux/ui design</h3>
              <p>Ideal if you&apos;re looking for a quick, professional website without the need for custom coding. With drag-and-drop tools and pre-designed templates, we can launch your site quickly and efficiently. Web builders work well for businesses ranging from independents and small businesses, to large e-commerce stores that need an attractive, functional site without extensive customization. These platform subscriptions include hosting, domain management, and basic SEO tools.</p>
            </div>
            <div>
              <div className="tools">
                <Image src={shopify} width={120} alt=""/>
                <Image src={squarespace} width={200} alt=""/>
              </div>
              <div>
                <Link href='/portfolio/builders' scroll={true}>see portfolio</Link>
              </div>              
            </div>
          </div>
        <div className="box">
          <div>
            <h3>web development</h3>
            <p>For small businesses and e-commerce stores, I build professional websites quickly and efficiently using web builder platforms that include hosting, domain management, and SEO tools. For businesses requiring something more advanced or custom, I provide custom frontend development with modern JavaScript frameworks, giving you complete control over design, functionality, and performance. Whether you need a polished site launched fast or a scalable web application built for growth, I help create a solution that fits your goals.</p>            
          </div>
          <div>
            <div className="tools">
                <Image src={nextjs} width={120} alt=""/>
                <Image src={react} width={50} alt=""/>
            </div>
            <div>
              <Link href='/portfolio/development' scroll={true}>see portfolio</Link>
            </div>            
          </div>
        </div>

        </div>
      </section>


    </div>
  );
}
