import { useEffect, useRef, useState } from "react";
import Music from "./SmallComps/Music";
import Profile from "./SmallComps/Profile";
import logo from "../assets/logo.png";

export default function SkillMatrix() {
  const matrixCanvasRef = useRef(null);
  const containerRef = useRef(null);

  // --- MATRIX ENGINE ---
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    const container = containerRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let streams = [];

    const fontSize = 16;
    const chars = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%<>!&|";

    class Stream {
      constructor(x, height) {
        this.x = x;
        this.reset();
      }
      reset() {
        this.y = Math.random() * -1000;
        this.speed = Math.random() * 1.5 + 2;
        this.length = Math.floor(Math.random() * 20) + 10;
        this.chars = Array.from({ length: this.length }, () => ({
          val: chars.charAt(Math.floor(Math.random() * chars.length)),
          opacity: Math.random(),
        }));
      }
      update(currentHeight) {
        this.y += this.speed;
        if (this.y > currentHeight + this.length * fontSize) this.reset();
        this.chars.forEach((char) => {
          if (Math.random() > 0.95) char.opacity = Math.random();
        });
      }
      draw() {
        for (let i = 0; i < this.length; i++) {
          const charY = this.y - i * fontSize;
          if (charY < -fontSize || charY > canvas.height) continue;
          const finalOpacity = this.chars[i].opacity * (1 - i / this.length);
          ctx.fillStyle = `rgba(204, 255, 0, ${finalOpacity * 0.3})`;
          ctx.fillText(this.chars[i].val, this.x, charY);
        }
      }
    }

    const initCanvas = () => {
      const width = window.innerWidth;
      const height = container.offsetHeight; // Use offsetHeight to avoid scroll jumping
      canvas.width = width;
      canvas.height = height;
      const columns = Math.floor(width / fontSize);
      streams = Array.from({ length: columns }, (_, i) => new Stream(i * fontSize, height));
    };

    const render = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.25)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;
      streams.forEach((s) => { s.update(canvas.height); s.draw(); });
      animationFrameId = requestAnimationFrame(render);
    };

    initCanvas();
    render();
    const resizeObserver = new ResizeObserver(initCanvas);
    resizeObserver.observe(container);
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={containerRef}
      className="relative min-h-screen bg-[#050505] font-mono text-[#ccff00] p-6 md:p-16 overflow-hidden" 
    >
      {/* Scrollbar Fix: added overflow-hidden to parent and ensured canvas stays behind */}
      <canvas ref={matrixCanvasRef} className="absolute top-0 left-0 z-0 pointer-events-none opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b-2 border-[#ccff00] pb-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 text-white">TECHNICAL
              <span className="text-[#ccff00]"> PROTOCOLS</span>
            </h2>
            <p className="font-mono text-[#ccff00]/60 text-sm md:text-base">&gt; DECRYPTING SKILLS STREAM...</p>
          </div>
          <a href="https://github.com/Adithyamaurya" target="_blank" rel="noopener noreferrer" className="mt-6 md:mt-0 flex items-center gap-4 group cursor-pointer">
            <div className="text-right hidden md:block">
              <div className="text-xs font-mono text-[#ccff00]">CHANNEL_ID</div>
              <div className="text-xl font-bold text-white">CORUJAX</div>
            </div>
            <div className="size-16 border border-[#ccff00] bg-[#ccff00]/10">
              <img src={logo} alt="GitHub Logo" className="w-full h-full object-contain" aria-hidden="true" />
            </div>
          </a>
        </div>

        {/* COMPONENT ROW: Profile and Music side by side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-24">
          <Profile />
        </div>
      </div>

      {/* Overlay Scanlines */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.3)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_3px,4px_100%]" />
    </section>
  );
}