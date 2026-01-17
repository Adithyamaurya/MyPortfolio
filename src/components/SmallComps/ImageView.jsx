import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
// ... keep your image imports
const ImageView = ({ setIsOpen }) => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const displayedImages = images.slice(currentPage * 2, currentPage * 2 + 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-2"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-5xl border border-gray-800 bg-black flex flex-col"
      >
        {/* Tight Header */}
        <div className="flex justify-between items-center p-3 border-b border-gray-800">
          <span className="text-[#ccff00] font-mono text-xs tracking-tighter uppercase">Registry_v1.0 // Page_0{currentPage + 1}</span>
          <button onClick={() => setIsOpen(false)} className="text-white hover:text-[#ccff00] font-mono text-xs">
            [ CLOSE ]
          </button>
        </div>

        {/* IMAGE CONTAINER - Maxed Height */}
        <div className="relative h-[85vh] w-full overflow-hidden bg-zinc-950">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full w-full p-2"
            >
              {displayedImages.map((img, i) => (
                <div key={i} className="h-full w-full overflow-hidden border border-gray-800">
                  <img
                    src={img}
                    alt="Registry Data"
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Footer */}
        <div className="p-3 flex justify-center items-center gap-4">
          {[0, 1, 2].map((dot) => (
            <div 
              key={dot}
              className={`h-1 transition-all duration-500 ${dot === currentPage ? 'w-10 bg-[#ccff00]' : 'w-2 bg-gray-800'}`}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageView;