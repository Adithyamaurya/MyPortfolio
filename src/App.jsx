import React, { useEffect, useState } from 'react'; // Added useState
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showSplash, setShowSplash] = useState(true); // Splash state

  useEffect(() => {
    // Timer to remove splash from DOM after animation completes
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    const sections = document.querySelectorAll(".scroll-reveal");

    sections.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 30,
          scale: 0.98 
        }, 
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8, 
          ease: "power4.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none none",
            onEnter: () => {
              section.classList.add("glitch-active");
              setTimeout(() => {
                section.classList.remove("glitch-active");
              }, 400);
            }
          }
        }
      );
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      {/* 1. SPLASH SCREEN OVERLAY */}
      {showSplash && (
  <div className="fixed inset-0 z-[10002] flex items-center justify-center bg-[#ccff00] animate-splash-up overflow-hidden">
    
    {/* 1. BACKGROUND DATA STREAM */}
    <div className="absolute inset-0 opacity-10 font-mono text-[10px] text-black flex flex-wrap gap-4 p-4 leading-none select-none pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="animate-pulse">
          LOADING_CORE_SYSTEMS... [0x00{i}f] <br/>
          ENCRYPTING_ASSETS... <br/>
          ESTABLISHING_CONNECTION...
        </span>
      ))}
    </div>

    {/* 2. GEOMETRIC SCANNER RING */}
    <div className="absolute w-[300px] h-[300px] border border-black/20 rounded-full animate-ping opacity-20" />
    <div className="absolute w-[400px] h-[400px] border border-black/10 rounded-full animate-pulse" />

    {/* 3. LOGO WITH GLITCH EFFECT */}
 <div className="relative flex flex-col items-center">
  {/* LOGO GROUP */}
  <div className="relative h-24 md:h-32">
    <h1 className="text-8xl font-black tracking-tighter text-black animate-logo-pop relative z-10">
      ADDY<span className="opacity-40">.</span>
    </h1>
    
    {/* Glitch Shadows (Only for the Main Logo) */}
    <h1 className="absolute inset-0 text-8xl font-black tracking-tighter text-black/30 animate-glitch-1 translate-x-1 select-none">
      ADDY.
    </h1>
    <h1 className="absolute inset-0 text-8xl font-black tracking-tighter text-black/20 animate-glitch-2 -translate-x-1 select-none">
      ADDY.
    </h1>
  </div>

  {/* SUBTEXT GROUP - Moved outside H1 for control */}
  <div className="flex flex-col items-center mt-2">
    <div className="flex items-center gap-2">
      <span className="h-[1px] w-8 bg-black/30" />
      <p className="text-xs md:text-sm font-mono font-bold text-black tracking-[0.3em] uppercase animate-pulse">
        INITIATING...CORUJAX
      </p>
      <span className="h-[1px] w-8 bg-black/30" />
    </div>
    
    {/* Dynamic Hex Codes (Adds to the "Technical" feel) */}
    <p className="text-[10px] font-mono text-black/40 mt-1 uppercase tracking-widest">
      ST_TRK: 0x00{Math.floor(Math.random() * 99)}f // V.1.0.4
    </p>
  </div>
</div>

    {/* 4. PROGRESS BAR */}
    <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-[2px] bg-black/10 overflow-hidden">
      <div className="h-full bg-black animate-progress-load" />
    </div>
  </div>
)}

{/* --- UPDATED STYLES --- */}
<style jsx global>{`
  @keyframes splash-up {
    0% { transform: translateY(0); }
    85% { transform: translateY(0); }
    100% { transform: translateY(-100%); }
  }

  @keyframes progress-load {
    0% { width: 0%; }
    100% { width: 100%; }
  }

  @keyframes glitch-1 {
    0% { clip-path: inset(40% 0 61% 0); }
    20% { clip-path: inset(92% 0 1% 0); }
    40% { clip-path: inset(43% 0 1% 0); }
    60% { clip-path: inset(25% 0 58% 0); }
    80% { clip-path: inset(54% 0 7% 0); }
    100% { clip-path: inset(58% 0 43% 0); }
  }

  @keyframes glitch-2 {
    0% { clip-path: inset(24% 0 29% 0); }
    20% { clip-path: inset(54% 0 21% 0); }
    40% { clip-path: inset(11% 0 78% 0); }
    60% { clip-path: inset(82% 0 2% 0); }
    80% { clip-path: inset(34% 0 13% 0); }
    100% { clip-path: inset(12% 0 32% 0); }
  }

  .animate-glitch-1 {
    animation: glitch-1 1.5s infinite linear alternate-reverse;
  }
  .animate-glitch-2 {
    animation: glitch-2 1s infinite linear alternate-reverse;
  }
  .animate-progress-load {
    animation: progress-load 1.2s ease-in-out forwards;
  }
  .animate-splash-up {
    animation: splash-up 1.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
  }
`}</style>

      <Cursor />
      <Navbar />
      
      {/* Content wrapper fades in slightly after splash */}
      <div className={showSplash ? "opacity-0" : "opacity-100 transition-opacity duration-1000"}>
        <div className="scroll-reveal"><About /></div>
        <div className="scroll-reveal"><Projects /></div>
        <div className="scroll-reveal"><Skills /></div>
        <div className="scroll-reveal"><Contact /></div>
        <Footer />
      </div>

      {/* 2. SPLASH ANIMATIONS */}
      <style jsx global>{`
        @keyframes splash-up {
          0% { transform: translateY(0); }
          70% { transform: translateY(0); } /* Hold */
          100% { transform: translateY(-100%); } /* Exit */
        }
        @keyframes logo-pop {
          0% { transform: scale(0.9); opacity: 0; filter: blur(10px); }
          30% { transform: scale(1); opacity: 1; filter: blur(0px); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-splash-up {
          animation: splash-up 1.8s cubic-bezier(0.85, 0, 0.15, 1) forwards;
        }
        .animate-logo-pop {
          animation: logo-pop 1.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;