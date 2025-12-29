
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TempleEntrance = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEnter = () => {
    setIsOpen(true);
    setTimeout(onEnter, 1500); // Wait for door animation
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div 
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1 } }}
        >
          {/* Left Door - Updated to Maroon Theme */}
          <motion.div 
            className="absolute left-0 top-0 w-1/2 h-full bg-[#2b0a0a] border-r-4 border-sunflower-gold flex items-center justify-end pr-10 shadow-2xl origin-left"
            initial={{ x: 0 }}
            animate={isOpen ? { x: "-100%", rotateY: 5 } : { x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="w-48 h-48 border-4 border-sunflower-gold rounded-full opacity-20 mr-[-6rem]" />
             <div className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-b from-sunflower-gold to-tomato rounded-full shadow-[0_0_30px_rgba(255,198,105,0.5)]" />
             
             {/* Decorative Patterns */}
             <div className="absolute top-20 right-20 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-sunflower-gold">
                   <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                   <path d="M50 10 L50 90 M10 50 L90 50" stroke="currentColor" strokeWidth="2" />
                </svg>
             </div>
          </motion.div>

          {/* Right Door - Updated to Maroon Theme */}
          <motion.div 
            className="absolute right-0 top-0 w-1/2 h-full bg-[#2b0a0a] border-l-4 border-sunflower-gold flex items-center justify-start pl-10 shadow-2xl origin-right"
            initial={{ x: 0 }}
            animate={isOpen ? { x: "100%", rotateY: -5 } : { x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="w-48 h-48 border-4 border-sunflower-gold rounded-full opacity-20 ml-[-6rem]" />
             <div className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-b from-sunflower-gold to-tomato rounded-full shadow-[0_0_30px_rgba(255,198,105,0.5)]" />
             
             {/* Decorative Patterns */}
             <div className="absolute bottom-20 left-20 opacity-10">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-sunflower-gold">
                   <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
                   <path d="M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="2" />
                </svg>
             </div>
          </motion.div>

          {/* Center Interaction */}
          <motion.div 
            className="relative z-10 flex flex-col items-center gap-6"
            animate={isOpen ? { scale: 1.5, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
             {/* Om Symbol SVG */}
             <motion.div
               animate={{ 
                 boxShadow: ["0 0 20px #ffc669", "0 0 60px #ffc669", "0 0 20px #ffc669"]
               }}
               transition={{ duration: 3, repeat: Infinity }}
               className="w-32 h-32 bg-[#3a1010] rounded-full border-4 border-sunflower-gold flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-2xl"
               onClick={handleEnter}
             >
                <span className="text-6xl text-sunflower-gold font-bold">ॐ</span>
             </motion.div>
             
             <motion.button
                onClick={handleEnter}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-transparent border border-sunflower-gold/50 text-sunflower-gold font-serif text-xl tracking-widest uppercase rounded-full hover:bg-sunflower-gold/10 transition-colors"
             >
                Click to Enter Temple
             </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TempleEntrance;
