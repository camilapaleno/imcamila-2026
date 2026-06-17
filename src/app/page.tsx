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
import arra from "@/image/arra.png";
import hi from "@/image/wavey.gif";
import boogie from "@/image/dancey.gif";
import examples from "@/image/examples.jpg";
import { motion } from "motion/react"
import { easeInOut } from "motion";
import HeroChat from "@/components/HeroChat";
import FeaturedCaseStudies from "@/components/FeaturedCaseStudies";
import FeaturedWebsites from "@/components/FeaturedWebsites";
import BrowserDemo from "@/components/BrowserDemo";
import { demos } from "@/data/demos";
import ParticleBackground from "@/components/ParticleBackground";
import AnimatedHeader from "@/components/AnimatedHeader";
import Footer from "@/components/Footer";
import dynamic from 'next/dynamic';
import caseStudies from "@/data/caseStudies";

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
  loading: () => null
});

const PixelSphere = dynamic(() => import('@/components/PixelSphere'), {
  ssr: false,
  loading: () => null
});

export default function Home() {

  return (
    <div className="home" style={{position: 'relative'}}>
      <ParticleBackground />
      <PixelSphere />

      <section className="hero" style={{ position: 'relative', pointerEvents: 'none' }}>

        <AnimatedHeader
          as="h3"
          style={{ pointerEvents: 'auto' }}
          delay={0}
        >
         Hi, my name is Camila.
        </AnimatedHeader>

        <AnimatedHeader
          as="h1"
          style={{ pointerEvents: 'auto' }}
          delay={0.5}
        >
          I'm a UX/UI<span className="pixel"> designer</span> and <span className="pixel">website developer</span> based in Los Angeles.
        </AnimatedHeader>

        <AnimatedHeader
          as="h3"
          style={{ pointerEvents: 'auto' }}
          delay={0.5}
        >
          See my case studies 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
          </svg>
        </AnimatedHeader>


      </section>

      <FeaturedCaseStudies />
      <BrowserDemo projects={demos} />
      <FeaturedWebsites />


      {/* <Footer /> */}


    </div>
  );
}
