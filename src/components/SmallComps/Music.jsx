import React, { useState, useRef, useEffect } from 'react';
import song1 from '../../assets/audio/FEAR.mp3';
import song2 from '../../assets/audio/Idea10.mp3';
import song3 from '../../assets/audio/Potamoi.mp3';

const Music = () => {
  // 1. FIXED LINKS: Using real public MP3 previews for testing
  const songs = [
    
    { name: "FEAR", artist: "NF", url: song1, duration: "4:30" },
    { name: "Idea10", artist: "Gibron Alcocer", url: song2, duration: "2:06" },
    { name: "Potamoi", artist: "Keith Merill", url: song3, duration: "4:07" }
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Initialize audio object once
  const audioRef = useRef(new Audio(songs[0].url));

  // 2. LOGIC: Handle play/pause toggle
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Playback blocked until user interaction. Click again."));
    }
    setIsPlaying(!isPlaying);
  };

  // 3. LOGIC: Update Source when song changes
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(songs[currentSongIndex].url);
    if (isPlaying) {
      audioRef.current.play();
    }
    
    // Progress listener
    const updateProgress = () => {
      if (audioRef.current.duration) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('ended', nextSong); // Auto-play next
    
    return () => {
      audioRef.current.removeEventListener('timeupdate', updateProgress);
      audioRef.current.pause();
    };
  }, [currentSongIndex]);

  const nextSong = () => {
    setCurrentSongIndex((prev) => (prev + 1) % songs.length);
  };

  const prevSong = () => {
    setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="flex flex-col items-center group/he select-none font-mono">
      {/* EVERYTHING BELOW THIS LINE IS YOUR ORIGINAL DESIGN UNCHANGED */}
      <div className="relative z-0 h-16 -mb-2 transition-all duration-200 group-hover/he:h-0">
        <svg width={128} height={128} viewBox="0 0 128 128" className={`duration-500 border-4 rounded-full shadow-md border-[#ccff00]/30 border-spacing-5 transition-all ${isPlaying ? 'animate-[spin_3s_linear_infinite]' : ''}`}>
          <svg>
            <rect width={128} height={128} fill="black" />
            <circle cx={20} cy={20} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={40} cy={30} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={60} cy={10} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={80} cy={40} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={100} cy={20} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={120} cy={50} r={2} fill="#ccff00" fillOpacity="0.5" />
            <circle cx={90} cy={30} r={10} fill="#ccff00" fillOpacity="0.2" />
            <circle cx={90} cy={30} r={8} fill="#ccff00" />
            <path d="M0 128 Q32 64 64 128 T128 128" fill="#ccff00" fillOpacity="0.3" stroke="black" strokeWidth={1} />
            <path d="M0 128 Q32 48 64 128 T128 128" fill="#ccff00" fillOpacity="0.5" stroke="black" strokeWidth={1} />
            <path d="M0 128 Q32 32 64 128 T128 128" fill="#ccff00" stroke="black" strokeWidth={1} />
            <path d="M0 128 Q16 64 32 128 T64 128" fill="#ccff00" fillOpacity="0.3" stroke="black" strokeWidth={1} />
            <path d="M64 128 Q80 64 96 128 T128 128" fill="#ccff00" fillOpacity="0.5" stroke="black" strokeWidth={1} />
          </svg>
        </svg>
        <div className="absolute z-10 w-8 h-8 bg-black border-4 rounded-full shadow-sm border-[#ccff00] top-12 left-12" />
      </div>

      <div className="z-30 flex flex-col w-40 h-20 transition-all duration-300 bg-black border border-gray-800 shadow-md group-hover/he:h-40 group-hover/he:w-72 rounded-2xl shadow-black">
        <div className="flex flex-row w-full h-0 group-hover/he:h-20">
          <div className={`relative flex items-center justify-center w-24 h-24 group-hover/he:-top-6 group-hover/he:-left-4 opacity-0 transition-all duration-100 ${isPlaying ? 'group-hover/he:animate-[spin_3s_linear_infinite]' : ''} group-hover/he:opacity-100`}>
            <svg width={96} height={96} viewBox="0 0 128 128" className="duration-500 border-4 rounded-full shadow-md border-[#ccff00]/50 border-spacing-5">
              <svg>
                <rect width={128} height={128} fill="black" />
                <circle cx={20} cy={20} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={40} cy={30} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={60} cy={10} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={80} cy={40} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={100} cy={20} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={120} cy={50} r={2} fill="#ccff00" fillOpacity="0.5" />
                <circle cx={90} cy={30} r={10} fill="#ccff00" fillOpacity="0.2" />
                <circle cx={90} cy={30} r={8} fill="#ccff00" />
                <path d="M0 128 Q32 64 64 128 T128 128" fill="#ccff00" fillOpacity="0.3" stroke="black" strokeWidth={1} />
                <path d="M0 128 Q32 48 64 128 T128 128" fill="#ccff00" fillOpacity="0.5" stroke="black" strokeWidth={1} />
                <path d="M0 128 Q32 32 64 128 T128 128" fill="#ccff00" stroke="black" strokeWidth={1} />
                <path d="M0 128 Q16 64 32 128 T64 128" fill="#ccff00" fillOpacity="0.3" stroke="black" strokeWidth={1} />
                <path d="M64 128 Q80 64 96 128 T128 128" fill="#ccff00" fillOpacity="0.5" stroke="black" strokeWidth={1} />
              </svg>
            </svg>
            <div className="absolute z-10 w-6 h-6 bg-black border-4 rounded-full shadow-sm border-[#ccff00] top-9 left-9" />
          </div>
          <div className="flex flex-col justify-center w-full pl-3 -ml-24 overflow-hidden group-hover/he:-ml-3 text-nowrap">
            <p className="text-xl font-bold text-[#ccff00]">{songs[currentSongIndex].name}</p>
            <p className="text-gray-500 uppercase text-[10px] tracking-widest">{songs[currentSongIndex].artist}</p>
          </div>
        </div>

        <div className="flex flex-row mx-3 mt-3 bg-gray-900 border border-gray-800 rounded-md min-h-4 group-hover/he:mt-0">
          <span className="hidden pl-3 text-sm text-[#ccff00] group-hover/he:inline-block">
            {Math.floor(audioRef.current.currentTime / 60)}:{(Math.floor(audioRef.current.currentTime % 60)).toString().padStart(2, '0')}
          </span>
          <input 
            type="range" min={0} max={100} value={progress} 
            onChange={(e) => {
               const seekTime = (e.target.value / 100) * audioRef.current.duration;
               audioRef.current.currentTime = seekTime;
            }}
            className="w-24 group-hover/he:w-full flex-grow h-1 mx-2 my-auto bg-gray-700 rounded-full appearance-none accent-[#ccff00] cursor-pointer" 
          />
          <span className="hidden pr-3 text-sm text-gray-500 group-hover/he:inline-block">{songs[currentSongIndex].duration}</span>
        </div>

        <div className="flex flex-row items-center justify-center flex-grow mx-3 space-x-5">
          <div className="flex items-center justify-center w-12 h-full cursor-pointer text-gray-400 hover:text-[#ccff00]">
            <svg onClick={prevSong} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="19 20 9 12 19 4 19 20" /><line x1={5} y1={19} x2={5} y2={5} /></svg>
          </div>

          <div onClick={togglePlay} className="flex items-center justify-center w-12 h-full cursor-pointer text-[#ccff00]">
            {!isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={6} y={4} width={4} height={16} /><rect x={14} y={4} width={4} height={16} /></svg>
            )}
          </div>

          <div className="flex items-center justify-center w-12 h-full cursor-pointer text-gray-400 hover:text-[#ccff00]">
            <svg onClick={nextSong} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polygon points="5 4 15 12 5 20 5 4" /><line x1={19} y1={5} x2={19} y2={19} /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Music;