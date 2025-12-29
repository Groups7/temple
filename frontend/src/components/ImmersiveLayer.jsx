
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const ImmersiveLayer = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  // Falling Petals Animation
  const petals = Array.from({ length: 12 });

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {/* Golden Glow Cursor */}
      <motion.div
        className="hidden md:block absolute w-8 h-8 rounded-full bg-sunflower-gold blur-xl mix-blend-screen opacity-60"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      
      {/* Falling Petals */}
      {petals.map((_, i) => (
        <motion.div
          key={i}
          className="absolute -top-10"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: -20, 
            rotate: 0,
            opacity: 0
          }}
          animate={{ 
            y: window.innerHeight + 100, 
            rotate: 360,
            opacity: [0, 0.8, 0],
            x: `calc(${Math.random() * 100}vw + ${Math.random() * 200 - 100}px)`
          }}
          transition={{ 
            duration: Math.random() * 10 + 15, // Slow float
            repeat: Infinity, 
            delay: Math.random() * 20,
            ease: "linear"
          }}
        >
          {/* Simple Flower Petal SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#ff9656" className="opacity-60 drop-shadow-lg">
             <path d="M12 2C12 2 14 8 18 10C22 12 22 14 18 16C14 18 12 22 12 22C12 22 10 18 6 16C2 14 2 12 6 10C10 8 12 2 12 2Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default ImmersiveLayer;
