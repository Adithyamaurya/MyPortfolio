import { color } from "framer-motion";
import crypticImage from "../assets/cryptic.png";
import safetapp from "../assets/safetapp.png";
import zenapp from "../assets/zenapp.png";
import homease from "../assets/homease.png";
import chainguardImg from "../assets/blockchain.jpg";
export default function Projects() {
  const operations = [
    {
      id: "001",
      date: "2023.06.13",
      title: "CRYPTIC",
      description: "Designed an image encryption system to secure visual data using custom cryptographic transformations, ensuring confidentiality and resistance against unauthorized access.",
      tags: ["React", "AES-256", "Scalability"],
      liveLink: "https://clinquant-puppy-a3d0fe.netlify.app/",
      sourceCode: "https://github.com/Adithyamaurya/Cryptic",
      imageUrl: crypticImage,
    },
    {
      id: "002",
      date: "2023.02.04",
      title: "ZENAPP",
      description: "Built a focused productivity system with real-time state sync and low-latency data flow for daily task operations.",
      tags: ["Java", "XML", "State Management", "UX Systems"],
      liveLink: "https://github.com/Adithyamaurya/ZenApp",
      sourceCode: "https://github.com/Adithyamaurya/ZenApp",
      imageUrl: zenapp,
    },
    {
      id: "003",
      date: "2021.12.03",
      title: "CHAINGUARD",
      description: "Implemented a secure transaction and verification layer focused on integrity, traceability, and tamper resistance.",
      tags: ["AI/ML", "Security", "Blockchain"],
      liveLink: "https://github.com/Adithyamaurya/Chainguard",
      sourceCode: "https://github.com/Adithyamaurya/Chainguard",
      imageUrl: chainguardImg,
    },
    {
      id: "004",
      date: "2022.07.19",
      title: "SAFETAPP",
      description: "Engineered a real-time safety alert and response system with location-aware triggers and rapid notification pipelines.",
      tags: ["Android", "Firebase", "Security"],
      liveLink: "https://github.com/Adithyamaurya/SafetApp",
      sourceCode: "https://github.com/Adithyamaurya/SafetApp",
      imageUrl: safetapp,
    },
    {
      id: "005",
      date: "2022.11.28",
      title: "HOMEASE",
      description: "Designed an event-driven home automation backend enabling device orchestration, triggers, and system-wide state consistency.",
      tags: ["HTML", "MySQL", "PHP"],
      liveLink: "https://github.com/Adithyamaurya/HomEase",
      sourceCode: "https://github.com/Adithyamaurya/HomEase",
      imageUrl: homease,
    },

  ];

  return (
    <>
      <div class="border-t border-[#333] bg-[#0a0a0a] p-2 text-[10px] md:text-xs text-gray-500 flex justify-between items-center select-none relative">
        <div>SECURE OPERATIONS ARCHIVE // CLEARANCE VERIFIED — ACCESS GRANTED
        </div>
        <div class="flex gap-4">
          <span>CORE LOAD: 12%</span>
          <span>MEMORY BANKS: STABLE</span>
          <span>UPLINK: SECURED</span>
        </div>
      </div>

      <section id="projects" className="min-h-screen py-[80px] px-[5%] relative border-t-2 border-b-2 border-gray-900 ">
        <div className="max-w-[1400px] mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-end mb-20">
            <div className="flex items-center justify-center lg:justify-center -mt-12">
              <h2 className="text-[96px] font-[900] text-[#ccff00] ml-20 leading-none tracking-[-0.05em] font-sans text-center lg:text-left"
                style={{ fontFamily: '"Inter", sans-serif' }}>
                <span className="block" style={{ color: `white` }}>PROJECT</span>
                ARCHIVES
              </h2>
            </div>

            <div className="font-mono text-gray-400 leading-[1.5] max-w-xl">
              <p className="text-[#ccff00] mb-4 animate-pulse"> {">"} ACCESSING ENCRYPTED DATABASE...</p>
              <p>
                This terminal provides access to a secured development archive.
                All entries have completed execution, validation, and stabilization protocols.
                Only finalized systems are authorized for display.
              </p>

              {/* Progress Bar  */}
              <div className="mt-8">
                <div className="w-full h-0.5 bg-[#ccff00]/20 mb-2.5 relative overflow-hidden">
                  <div className="w-[15%] h-full bg-[#ccff00] shadow-[0_0_10px_#00ff41] animate-progress"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[30px] w-[75%] mx-auto">
            {operations.map((op) => (
              <div key={op.id}
                className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-10 px-6 border-l-2 group border-[#333] bg-black/30 backdrop-blur-[10px] hover:border-[#ccff00]/50 transition-colors duration-500">
                {/* Evidence Image Box */}
                <div className="relative w-full aspect-video lg:aspect-square bg-white/5 border border-white/10 overflow-hidden group/image hover:border-[#ccff00]/80 transition-colors duration-500">
                  <img
                    src={op.imageUrl}
                    alt={op.title}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all duration-700 grayscale hover:grayscale-0"
                  />

                  {/* Grid overlay */}
                  <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0.1)_2px,transparent_2px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_2px)] bg-[size:20px_20px]" />

                  {/* CORNER BRACKETS - Improved logic and visibility */}
                  {[
                    { pos: "top-0 left-0 border-l-2 border-t-2", move: "group-hover/image:translate-x-4 group-hover/image:translate-y-4" },
                    { pos: "top-0 right-0 border-r-2 border-t-2", move: "group-hover/image:-translate-x-4 group-hover/image:translate-y-4" },
                    { pos: "bottom-0 left-0 border-l-2 border-b-2", move: "group-hover/image:translate-x-4 group-hover/image:-translate-y-4" },
                    { pos: "bottom-0 right-0 border-r-2 border-b-2", move: "group-hover/image:-translate-x-4 group-hover/image:-translate-y-4" },
                  ].map((bracket, i) => (
                    <div
                      key={i}
                      className={`absolute w-4 h-4 ${bracket.pos} ${bracket.move} border-[#ccff00]/40 transition-all duration-500 ease-out z-30 pointer-events-none`}
                    />
                  ))}

                  <div className="absolute inset-0 pointer-events-none
              bg-gradient-to-b from-transparent via-[#ccff00]/20 to-transparent
              -translate-y-full group-hover/image:translate-y-full
              transition-transform duration-1000 ease-in-out"
            />
                </div>

                {/* Project Details */}
                <div className="flex flex-col gap-5 py-8">
                  <div className="w-fit px-3 py-1 border border-[#ccff00]/30 text-[#ccff00] text-[10px] font-mono bg-[#ccff00]/5 font-['Courier_New',_Courier,_monospace]">
                    <span> DATE: {op.date}</span>
                  </div>

                  <h3 className="text-3xl text-white font-black font-sans tracking-tight" style={{ fontFamily: '"Inter", sans-serif' }}>
                    PROJECT: <span className="group-hover:text-[#ccff00] transition-colors duration-500">{op.title}</span>
                  </h3>

                  <p className="text-sm text-gray-400 leading-[1.6] font-['Courier_New',_Courier,_monospace] max-w-2xl">
                    {op.description}
                  </p>

                  <div className="flex gap-2.5 flex-wrap">
                    {op.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 border border-[#ccff00]/30 text-[#ccff00] text-[10px] font-mono bg-[#ccff00]/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Actions */}
                  <div className="flex items-center justify-between mt-auto pt-5 border-t-2 border-[#333]">
                    <div className="flex gap-8">
                      <a href={op.sourceCode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#ccff00] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github" aria-hidden="true">
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                          <path d="M9 18c-4.51 2-5-2-7-2"></path>
                        </svg>
                        <span className="text-xs tracking-wide">SOURCE_CODE</span>
                      </a>
                      <a href={op.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-[#ccff00] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-external-link" aria-hidden="true">
                          <path d="M15 3h6v6"></path>
                          <path d="M10 14 21 3"></path>
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        </svg>
                        <span className="text-xs tracking-wide">LIVE_LINK</span>
                      </a>

                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div class="border-t border-b border-[#333] bg-[#0a0a0a] p-2 text-[10px] md:text-xs text-gray-500 flex justify-between items-center select-none relative">
        <div>CORUJAX // AI
        </div>
        <div class="flex gap-4">
          <span>THOUGHT LOAD: BALANCED</span>
          <span>MEMORY CLUSTERS: ONLINE</span>
          <span>CHANNEL: ENCRYPTED</span>
        </div>
      </div>

    </>
  );
}