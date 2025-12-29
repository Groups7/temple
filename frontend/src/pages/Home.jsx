
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, HeartHandshake, Sparkles, Sun } from 'lucide-react';
import { EVENTS } from '../mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';
import ImmersiveLayer from '../components/ImmersiveLayer';

const Home = () => {
  const upcomingEvents = EVENTS.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax for Hero
  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // Rotating Halo Effect for Deity
  const haloRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#2b0a0a]"> {/* Deep Maroon Background */}
      <ImmersiveLayer />
      
      {/* Dynamic Parallax Hero Section */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Depth */}
        <motion.div 
          style={{ y: yHero, scale: 1.1 }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.pexels.com/photos/2186581/pexels-photo-2186581.jpeg" 
            alt="Temple Sunset" 
            className="w-full h-full object-cover brightness-[0.7] contrast-125 saturate-150"
          />
          {/* Vignette & Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-[#2b0a0a]" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60" />
        </motion.div>

        {/* Floating Lights/Diyas */}
        <div className="absolute bottom-0 w-full h-1/3 z-10 pointer-events-none">
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute bottom-10 w-24 h-24 bg-tomato/30 rounded-full blur-[40px]"
                    style={{ left: `${15 + i * 15}%` }}
                    animate={{ 
                        y: [0, -20, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
        </div>

        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-20 text-center px-4 max-w-6xl mx-auto space-y-8"
        >
          {/* Sacred Symbol */}
          <motion.div
             initial={{ scale: 0, rotate: -180 }}
             animate={{ scale: 1, rotate: 0 }}
             transition={{ duration: 1.5, type: "spring" }}
             className="mx-auto w-24 h-24 mb-6 relative"
          >
             <div className="absolute inset-0 bg-sunflower-gold rounded-full blur-xl opacity-40 animate-pulse" />
             <Sun className="w-full h-full text-sunflower-gold drop-shadow-[0_0_15px_rgba(255,198,105,0.8)]" />
          </motion.div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter drop-shadow-2xl font-serif">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.5 }}
               className="text-transparent bg-clip-text bg-gradient-to-b from-sunflower-gold to-tomato"
             >
               DIVINE
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.7 }}
               className="text-white/90 italic text-4xl md:text-6xl mt-4 font-light"
             >
               Sanctuary of Peace
             </motion.div>
          </h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="flex flex-col items-center gap-2 pt-10"
          >
            <div className="h-20 w-[1px] bg-gradient-to-b from-sunflower-gold to-transparent" />
            <span className="text-sunflower-gold text-xs tracking-[0.5em] uppercase">Scroll to Enter</span>
          </motion.div>
        </motion.div>
      </section>

      {/* Horizontal Scroll / Parikrama Experience Mockup */}
      <section className="py-0 relative z-10 bg-[#2b0a0a]">
        <div className="h-32 bg-gradient-to-b from-[#2b0a0a] to-[#3a1010]" />
        
        {/* Virtual Darshan Section */}
        <div className="bg-[#3a1010] py-24 relative overflow-hidden">
           <MandalaBackground opacity={0.15} color="var(--sunflower-gold)" />
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
              <FadeIn className="text-center mb-16">
                 <h2 className="text-4xl md:text-5xl font-bold text-sunflower-gold font-serif mb-4">Virtual Darshan</h2>
                 <p className="text-white/70 text-lg">Experience the divine presence</p>
              </FadeIn>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 {/* Glowing Deity Frame */}
                 <div className="relative flex justify-center group">
                    {/* Rotating Halo Behind */}
                    <motion.div 
                       style={{ rotate: haloRotate }}
                       className="absolute w-[500px] h-[500px] border-[1px] border-dashed border-sunflower-gold/30 rounded-full"
                    />
                    <motion.div 
                       style={{ rotate: useTransform(scrollYProgress, [0, 1], [0, -180]) }}
                       className="absolute w-[400px] h-[400px] border-[1px] border-dotted border-tomato/30 rounded-full"
                    />
                    
                    {/* Image */}
                    <motion.div 
                       className="relative z-10 rounded-t-full overflow-hidden border-b-4 border-sunflower-gold shadow-[0_0_50px_rgba(255,101,66,0.3)]"
                       whileHover={{ scale: 1.05 }}
                       transition={{ duration: 0.5 }}
                    >
                       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50" />
                       <img 
                         src="https://images.pexels.com/photos/35406980/pexels-photo-35406980.jpeg" 
                         alt="Deity" 
                         className="w-[350px] h-[500px] object-cover"
                       />
                       {/* Overlay Glow */}
                       <div className="absolute inset-0 bg-sunflower-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </motion.div>
                 </div>

                 <div className="space-y-8 text-center md:text-left">
                    <FadeIn delay={0.2}>
                       <h3 className="text-3xl font-bold text-white mb-4">The Grace of Ganesha</h3>
                       <p className="text-white/70 leading-loose text-lg font-light">
                          "O Lord Ganesha, of curved trunk and massive body, the one whose splendor is equal to millions of Suns, please remove all obstacles in my undertakings."
                       </p>
                    </FadeIn>
                    <FadeIn delay={0.4}>
                       <div className="flex gap-4 justify-center md:justify-start">
                          <Link to="/about">
                             <Button className="bg-transparent border border-sunflower-gold text-sunflower-gold hover:bg-sunflower-gold hover:text-black transition-all duration-300 rounded-full px-8">
                                Read History
                             </Button>
                          </Link>
                          <Link to="/donate">
                             <Button className="bg-gradient-to-r from-tomato to-coral-glow text-white border-none rounded-full px-8 shadow-[0_0_20px_rgba(255,101,66,0.5)] hover:shadow-[0_0_40px_rgba(255,101,66,0.7)] transition-all">
                                Offer Seva
                             </Button>
                          </Link>
                       </div>
                    </FadeIn>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Events - Cards that look like Invitations */}
      <section className="py-32 bg-[#2b0a0a] relative z-10">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn className="text-center mb-16">
               <span className="text-tomato font-bold tracking-widest uppercase text-sm">Community</span>
               <h2 className="text-4xl text-white mt-2 font-serif">Sacred Gatherings</h2>
            </FadeIn>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {upcomingEvents.map((event) => (
                  <StaggerItem key={event.id}>
                     <motion.div 
                        whileHover={{ y: -10 }}
                        className="bg-[#3a1010] border border-white/10 p-6 rounded-t-[100px] rounded-b-[20px] shadow-2xl group overflow-hidden relative"
                     >
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-sunflower-gold to-transparent opacity-50" />
                        
                        <div className="h-48 rounded-t-[80px] overflow-hidden mb-6 relative">
                           <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                           <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                        </div>

                        <div className="text-center space-y-4">
                           <h3 className="text-xl font-bold text-sunflower-gold">{event.title}</h3>
                           <div className="flex justify-center gap-4 text-xs text-white/50 uppercase tracking-wider">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                           </div>
                           <p className="text-white/70 text-sm line-clamp-2">{event.description}</p>
                           <Button variant="link" className="text-tomato hover:text-white p-0">View Details</Button>
                        </div>
                     </motion.div>
                  </StaggerItem>
               ))}
            </StaggerContainer>
         </div>
      </section>

      {/* Hundi / Donation Teaser */}
      <section className="py-24 relative overflow-hidden bg-[#2b0a0a]">
         <div className="absolute inset-0 bg-gradient-to-r from-tomato via-coral-glow to-honey-bronze opacity-10" />
         <MandalaBackground opacity={0.2} />
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <ScaleIn>
               <div className="inline-block p-8 rounded-full border-4 border-sunflower-gold/30 bg-black/30 backdrop-blur-xl mb-8 shadow-[0_0_50px_rgba(255,198,105,0.2)]">
                  <HeartHandshake className="h-16 w-16 text-sunflower-gold" />
               </div>
            </ScaleIn>
            <FadeIn>
               <h2 className="text-5xl font-serif text-sunflower-gold mb-6">Support the Sanctum</h2>
               <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">
                  "The act of giving cleanses the soul."<br/>
                  Your contribution sustains our traditions and community service.
               </p>
               <Link to="/donate">
                  <Button size="lg" className="h-16 px-12 text-lg bg-sunflower-gold text-black hover:bg-white font-bold rounded-full shadow-[0_0_30px_rgba(255,198,105,0.4)] transition-all duration-300">
                     Make an Offering
                  </Button>
               </Link>
            </FadeIn>
         </div>
      </section>
    </div>
  );
};

export default Home;
