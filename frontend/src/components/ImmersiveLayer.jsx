
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ImmersiveLayer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 24); // Center the cursor (approx width/2)
      cursorY.set(e.clientY - 24);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Background Symbols Animation
  const itemCount = 20;
  const symbolTypes = ['om', 'swastik', 'sun', 'moon'];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Custom Cursor - Now using Swastik as requested */}
      <motion.div
        className="hidden md:flex absolute w-12 h-12 items-center justify-center text-sunflower-gold drop-shadow-[0_0_15px_rgba(255,198,105,0.9)] z-[101]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
         {/* Swastik SVG for Cursor */}
         <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 rotate-45">
            <path d="M12,0 L12,10 L2,10 L2,6 L8,6 L8,2 L12,2 L12,0 Z M12,14 L12,24 L14,24 L14,18 L22,18 L22,14 L12,14 Z M14,12 L24,12 L24,14 L18,14 L18,22 L14,22 L14,12 Z M0,12 L10,12 L10,14 L6,14 L6,22 L2,22 L2,12 L0,12 Z" transform="translate(0,0)"/>
            {/* Simple Swastik Path Approximation or use text if easier, but SVG is safer for rotation */}
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="20" fontWeight="bold">卐</text>
         </svg>
      </motion.div>
      
      {/* Falling Symbols */}
      {Array.from({ length: itemCount }).map((_, i) => {
        const type = symbolTypes[i % 4];
        return (
          <motion.div
            key={i}
            className="absolute -top-10"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -50, 
              rotate: 0,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100, 
              rotate: 360,
              opacity: [0, 0.6, 0],
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`
            }}
            transition={{ 
              duration: Math.random() * 20 + 15, // Slow graceful fall
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
          >
            {type === 'om' && (
              <div className="text-sunflower-gold/40 drop-shadow-sm">
                <svg width="30" height="30" viewBox="0 0 100 100" fill="currentColor">
                   <text x="50" y="70" fontSize="80" textAnchor="middle" fontWeight="bold">ॐ</text>
                </svg>
              </div>
            )}
            
            {type === 'swastik' && (
              <div className="text-tomato/40 drop-shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
                    <text x="50" y="70" fontSize="80" textAnchor="middle" fontWeight="bold">卐</text>
                 </svg>
              </div>
            )}
            
            {type === 'sun' && (
               <Sun className="w-6 h-6 text-sunflower-gold/40 drop-shadow-sm" />
            )}
            
            {type === 'moon' && (
               <Moon className="w-6 h-6 text-white/30 drop-shadow-sm rotate-12" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImmersiveLayer;
