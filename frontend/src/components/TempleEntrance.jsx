
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
          {/* Left Door */}
          <motion.div 
            className="absolute left-0 top-0 w-1/2 h-full bg-[#1a0f0a] border-r-4 border-honey-bronze flex items-center justify-end pr-10 shadow-2xl origin-left"
            initial={{ x: 0 }}
            animate={isOpen ? { x: "-100%", rotateY: 5 } : { x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="w-48 h-48 border-4 border-honey-bronze rounded-full opacity-20 mr-[-6rem]" />
             <div className="absolute right-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-b from-honey-bronze to-sandy-brown rounded-full shadow-[0_0_30px_rgba(232,180,95,0.5)]" />
          </motion.div>

          {/* Right Door */}
          <motion.div 
            className="absolute right-0 top-0 w-1/2 h-full bg-[#1a0f0a] border-l-4 border-honey-bronze flex items-center justify-start pl-10 shadow-2xl origin-right"
            initial={{ x: 0 }}
            animate={isOpen ? { x: "100%", rotateY: -5 } : { x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
             <div className="w-48 h-48 border-4 border-honey-bronze rounded-full opacity-20 ml-[-6rem]" />
             <div className="absolute left-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-b from-honey-bronze to-sandy-brown rounded-full shadow-[0_0_30px_rgba(232,180,95,0.5)]" />
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
               className="w-32 h-32 bg-[#2a1810] rounded-full border-4 border-sunflower-gold flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
               onClick={handleEnter}
             >
                <svg viewBox="0 0 24 24" className="w-20 h-20 fill-sunflower-gold">
                   <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4Z" opacity="0.3" />
                   <text x="50%" y="55%" textAnchor="middle" dy=".3em" fontSize="14" fill="currentColor" fontWeight="bold">ॐ</text>
                </svg>
             </motion.div>
             <p className="text-sunflower-gold font-serif text-xl tracking-widest uppercase animate-pulse">
                Click to Enter Temple
             </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TempleEntrance;
