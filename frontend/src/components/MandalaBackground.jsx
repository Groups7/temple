
import React from 'react';
import { motion } from 'framer-motion';

const MandalaBackground = ({ className = "", opacity = 0.05, color = "currentColor" }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Sacred Diya Lamp Animation */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: opacity }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {/* Main Diya Lamp */}
        <motion.svg
          viewBox="0 0 150 150"
          className="w-[400px] h-[400px] text-sunflower-gold"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.02, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <defs>
            <radialGradient id="flameGradient" cx="50%" cy="30%" r="60%">
              <stop offset="0%" stopColor="var(--sunflower-gold)" stopOpacity="1" />
              <stop offset="40%" stopColor="var(--tomato)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="var(--sunflower-gold)" stopOpacity="0.4" />
            </radialGradient>
            <radialGradient id="diyaGradient" cx="50%" cy="80%" r="80%">
              <stop offset="0%" stopColor="var(--tomato)" stopOpacity="0.8" />
              <stop offset="60%" stopColor="var(--sunflower-gold)" stopOpacity="0.6" />
              <stop offset="100%" stopColor="var(--tomato)" stopOpacity="0.3" />
            </radialGradient>
            <filter id="flameGlow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Diya Base */}
          <motion.ellipse
            cx="75"
            cy="120"
            rx="35"
            ry="12"
            fill="url(#diyaGradient)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
          />

          {/* Diya Body */}
          <motion.path
            d="M45 120 Q45 90 55 80 L65 75 Q75 70 85 75 L95 80 Q105 90 105 120 Z"
            fill="url(#diyaGradient)"
            stroke="var(--sunflower-gold)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.8 }}
            transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
          />

          {/* Wick */}
          <motion.line
            x1="75"
            y1="75"
            x2="75"
            y2="68"
            stroke="var(--tomato)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 2, ease: "easeOut" }}
          />

          {/* Flame Core */}
          <motion.path
            d="M75 68 Q72 62 75 58 Q78 62 75 68 Z"
            fill="url(#flameGradient)"
            filter="url(#flameGlow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.1, 1],
              opacity: [0, 1, 0.9, 1],
              y: [0, -1, 1, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: 2.5,
              ease: "easeInOut"
            }}
          />

          {/* Flame Outer Glow */}
          <motion.ellipse
            cx="75"
            cy="63"
            rx="8"
            ry="15"
            fill="none"
            stroke="var(--sunflower-gold)"
            strokeWidth="0.5"
            opacity="0.4"
            initial={{ scale: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: 3,
              ease: "easeInOut"
            }}
          />

          {/* Decorative Elements on Diya */}
          <motion.circle
            cx="65"
            cy="95"
            r="2"
            fill="var(--sunflower-gold)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 3.5, ease: "easeOut" }}
          />

          <motion.circle
            cx="85"
            cy="95"
            r="2"
            fill="var(--sunflower-gold)"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 3.7, ease: "easeOut" }}
          />

          {/* Sacred geometry rings */}
          <motion.circle
            cx="75"
            cy="75"
            r="30"
            fill="none"
            stroke="var(--sunflower-gold)"
            strokeWidth="0.3"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 4, delay: 2, ease: "easeOut" }}
          />

          <motion.circle
            cx="75"
            cy="75"
            r="45"
            fill="none"
            stroke="var(--tomato)"
            strokeWidth="0.2"
            opacity="0.15"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 5, delay: 2.5, ease: "easeOut" }}
          />
        </motion.svg>

        {/* Divine flame particles around diya */}
        {[...Array(28)].map((_, i) => {
          const angle = (i * 12.857) * Math.PI / 180; // 360/28
          const radius = 180 + Math.random() * 60;
          const baseX = 50 + (radius/4.5) * Math.cos(angle);
          const baseY = 50 + (radius/4.5) * Math.sin(angle);
          return (
            <motion.div
              key={`diya-particle-${i}`}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${baseX}%`,
                top: `${baseY}%`,
                background: `radial-gradient(circle, var(--sunflower-gold), var(--tomato))`,
              }}
              animate={{
                scale: [0, 2, 0],
                opacity: [0, 0.8, 0],
                x: [0, Math.sin(Date.now() * 0.001 + i * 0.15) * 40, 0],
                y: [0, Math.cos(Date.now() * 0.001 + i * 0.15) * 40, 0],
                rotate: [0, 720],
              }}
              transition={{
                duration: 10 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Sacred flame auras around diya */}
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={`flame-aura-${i}`}
            className="absolute w-2 h-48 rounded-full"
            style={{
              left: `${50 + 50 * Math.cos((i * 22.5) * Math.PI / 180)}%`,
              top: `${50 + 50 * Math.sin((i * 22.5) * Math.PI / 180)}%`,
              transformOrigin: 'bottom center',
              background: `linear-gradient(to top, var(--sunflower-gold) 0%, var(--tomato) 30%, transparent 100%)`,
            }}
            animate={{
              opacity: [0.01, 0.12, 0.01],
              scaleY: [0.1, 2, 0.1],
              scaleX: [0.3, 1.6, 0.3],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.5 + Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Divine light waves emanating from diya */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ duration: 4, delay: 3 }}
        >
          {/* Primary flame aura wave */}
          <motion.div
            className="absolute rounded-full border-2"
            style={{
              left: '50%',
              top: '50%',
              width: '200px',
              height: '200px',
              borderColor: 'var(--sunflower-gold)',
              borderStyle: 'solid',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 3.5, 1],
              opacity: [0.08, 0, 0.08],
              borderWidth: ['2px', '0.5px', '2px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Secondary wisdom wave */}
          <motion.div
            className="absolute rounded-full border border-tomato/40"
            style={{
              left: '50%',
              top: '50%',
              width: '300px',
              height: '300px',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 2.8, 1],
              opacity: [0.04, 0, 0.04],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              delay: 8,
              ease: "easeOut",
            }}
          />

          {/* Tertiary enlightenment wave */}
          <motion.div
            className="absolute rounded-full border border-sunflower-gold/20"
            style={{
              left: '50%',
              top: '50%',
              width: '400px',
              height: '400px',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.02, 0, 0.02],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              delay: 15,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MandalaBackground;
