
import React from 'react';
import { motion } from 'framer-motion';

const MandalaBackground = ({ className = "", opacity = 0.05, color = "currentColor" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-[800px] h-[800px] -top-64 -right-64 text-tomato"
        style={{ opacity: opacity, color: color }}
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
      >
        <path
          fill="currentColor"
          d="M50 0 C55 20 70 20 70 20 C70 20 80 5 80 5 C80 5 85 25 85 25 C85 25 98 25 98 25 C98 25 85 40 85 40 C85 40 95 55 95 55 C95 55 75 60 75 60 C75 60 70 80 70 80 C70 80 55 65 55 65 C55 65 50 85 50 85 C50 85 45 65 45 65 C45 65 30 80 30 80 C30 80 25 60 25 60 C25 60 5 55 5 55 C5 55 15 40 15 40 C15 40 2 25 2 25 C2 25 15 25 15 25 C15 25 20 5 20 5 C20 5 30 20 30 20 C30 20 45 20 50 0 Z"
        />
        <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="0.5" fill="none" />
        <path 
           fill="none" 
           stroke="currentColor" 
           strokeWidth="0.5"
           d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" 
        />
      </motion.svg>
      
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute w-[600px] h-[600px] bottom-0 -left-32 text-sunflower-gold"
        style={{ opacity: opacity * 0.8, color: color }}
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
      >
         <path
          fill="currentColor"
          d="M50 0 L60 30 L90 40 L65 60 L75 90 L50 75 L25 90 L35 60 L10 40 L40 30 Z"
        />
        <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
      </motion.svg>
    </div>
  );
};

export default MandalaBackground;
