import Music from "./SmallComps/Music.jsx";
import { motion } from "framer-motion";
import "../styles/about.css";
import imgSrc from "../assets/profile.png";
export default function About() {
  return (
    <><motion.div
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.2 }} 
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <div className="relative z-10 border-b border-[#333] bg-[#0a0a0a]/80 backdrop-blur-sm p-4 flex justify-between items-center  top-0 select-none">
        <div className="flex items-center gap-4">
          <div className="w-4 h-4 bg-[#ccff00] animate-pulse">
          </div>
          <span className="font-bold tracking-widest text-[#ccff00]">CORUJA-OS <span className="">v2.0</span></span>
        </div>
        <div className="text-xs text-gray-500 hidden md:block">
          REGION: AP-SOUTH-1 | USER: ADITHYA
        </div>
      </div>
      <section id="about" className="cyber-pattern">
        <div className="relative min-h-screen w-full mt-32">

          <div className="w-full px-4 md:px-10 pt-8 md:pt-12 pb-20 relative z-10">
            <div
              className="relative md:absolute md:top-[5%] md:left-10 max-w-2xl w-full select-none"
              style={{ opacity: 1, transform: "none" }}>
              <h1
                className="glitch text-[10vw] md:text-[6vw] leading-[0.9] font-medium tracking-tighter text-[#e0e0e0] mix-blend-overlay opacity-80"
                data-text="ADITHYA"
              >
                ADITHYA
              </h1>


              <h1 className="text-[10vw] md:text-[6vw] leading-[0.9] font-black tracking-tighter text-[#ccff00] drop-shadow-[0_0_15px_rgba(204,255,0,0.5)]">
                MAURYA
              </h1>

              {/* Bio */}
              <div className="mt-8 ml-2 md:ml-4 p-4 border-l-2 border-[#ccff00] bg-black/40 backdrop-blur-sm max-w-md pointer-events-auto">
                <h3 className="text-[#ccff00] font-bold mb-2 text-lg">
                  :: FRONTENT_CHEF ::
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Initializing systems… <br />
                  Resolving dependencies… <br />
                  Ignoring warnings until necessary…
                </p>
              </div>

            </div>
          </div>

          <div className="lg:w-5/12  ml-auto -mt-60 relative w-64 h-[534px] bg-[#111] border border-[#333] overflow-hidden cursor-pointer group/image hover:border-[#ccff00]/50 transition-colors">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={imgSrc}
                alt="Adithya Maurya"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-500 opacity-50 group-hover/image:opacity-100 group-hover/image:grayscale-0"
              />
            </div>

            {/* Grid overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20
              bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),
              linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]
              bg-[size:20px_20px]"
            />

            {/* Corner brackets */}
            {[
              { pos: "top-2 left-2 border-l-4 border-t-4", move: "group-hover/image:translate-x-3 group-hover/image:translate-y-3" },
              { pos: "top-2 right-2 border-r-4 border-t-4", move: "group-hover/image:-translate-x-3 group-hover/image:translate-y-3" },
              { pos: "bottom-2 left-2 border-l-4 border-b-4", move: "group-hover/image:translate-x-3 group-hover/image:-translate-y-3" },
              { pos: "bottom-2 right-2 border-r-4 border-b-4", move: "group-hover/image:-translate-x-3 group-hover/image:-translate-y-3" },
            ].map((bracket, i) => (
              <div
                key={i}
                className={`absolute w-8 h-8 ${bracket.pos} ${bracket.move} border-[#ccff00] group-hover/image:border-white transition-all duration-300 ease-out z-30 pointer-events-none group-hover/image:mix-blend-difference`}
              />
            ))}
            {/* Scan line */}
            <div className="absolute inset-0 pointer-events-none
              bg-gradient-to-b from-transparent via-[#ccff00]/20 to-transparent
              -translate-y-full group-hover/image:translate-y-full
              transition-transform duration-1000 ease-in-out"
            />
          </div>
        </div>
        <div className="absolute bottom-20 left-1/2 z-50 transition-all duration-300 hover:scale-105">
          <Music />
        </div>
      </section>
    </motion.div>
    </>
  );
}