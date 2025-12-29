
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ImmersiveLayer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20); // Center the Om symbol (approx width/2)
      cursorY.set(e.clientY - 20);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Falling Petals Animation - Increased count and added variations
  const petals = Array.from({ length: 20 });
  const flowerTypes = ['marigold', 'lotus', 'rose'];

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Om Cursor */}
      <motion.div
        className="hidden md:flex absolute w-12 h-12 items-center justify-center text-sunflower-gold drop-shadow-[0_0_10px_rgba(255,198,105,0.8)] z-[101]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
         <span className="text-4xl font-bold select-none">ॐ</span>
      </motion.div>
      
      {/* Falling Flowers/Petals */}
      {petals.map((_, i) => {
        const type = flowerTypes[i % 3];
        return (
          <motion.div
            key={i}
            className="absolute -top-10"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: -20, 
              rotate: 0,
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5
            }}
            animate={{ 
              y: window.innerHeight + 100, 
              rotate: 360,
              opacity: [0, 1, 0],
              x: `calc(${Math.random() * 100}vw + ${Math.random() * 300 - 150}px)`
            }}
            transition={{ 
              duration: Math.random() * 15 + 10, // Slow graceful fall
              repeat: Infinity, 
              delay: Math.random() * 20,
              ease: "linear"
            }}
          >
            {type === 'marigold' && (
              // Marigold/Orange Petal
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff9656" className="drop-shadow-md">
                 <path d="M12 2C14 2 16 4 16 8C16 12 12 16 12 16C12 16 8 12 8 8C8 4 10 2 12 2Z" />
              </svg>
            )}
            {type === 'lotus' && (
              // Lotus/Pinkish Petal
              <svg width="28" height="28" viewBox="0 0 24 24" fill="#ff7e4c" className="drop-shadow-md">
                 <path d="M12 21C12 21 17 16 19 12C21 8 18 4 15 4C13 4 12 6 12 6C12 6 11 4 9 4C6 4 3 8 5 12C7 16 12 21 12 21Z" />
              </svg>
            )}
            {type === 'rose' && (
               // Simple Flower Shape
               <svg width="20" height="20" viewBox="0 0 24 24" fill="#ffc669" className="drop-shadow-md opacity-80">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" />
               </svg>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImmersiveLayer;
