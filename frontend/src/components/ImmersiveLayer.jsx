
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
  const symbolTypes = ['om', 'lotus', 'sun', 'moon'];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Custom Cursor - Simple dot design */}
      <motion.div
        className="hidden md:flex absolute w-4 h-4 rounded-full bg-sunflower-gold shadow-[0_0_10px_rgba(255,198,105,0.8)] z-[101]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
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
            
            {type === 'lotus' && (
              <div className="text-tomato/40 drop-shadow-sm">
                 <svg width="24" height="24" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 10 C40 10, 30 20, 30 30 C30 40, 35 45, 40 50 C35 55, 30 60, 30 70 C30 80, 40 90, 50 90 C60 90, 70 80, 70 70 C70 60, 65 55, 60 50 C65 45, 70 40, 70 30 C70 20, 60 10, 50 10 Z"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
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
