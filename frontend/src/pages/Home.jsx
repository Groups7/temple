
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, Bell, Sparkles, Sun, ChevronRight } from 'lucide-react';
import { EVENTS } from '../mockData';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';
import ImmersiveLayer from '../components/ImmersiveLayer';

const TextSlider = () => {
  const words = [
    { text: "STRENGTH", sub: "Inner Power & Resilience" },
    { text: "DEVOTION", sub: "A Path to Divine Love" },
    { text: "PROTECTION", sub: "The Shield of Faith" },
    { text: "PEACE", sub: "Serenity for the Soul" }
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-48 relative overflow-hidden">
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.8, ease: "anticipate" }}
          className="absolute inset-0 flex flex-col justify-center"
        >
          <h2 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sunflower-gold to-tomato font-serif tracking-tighter">
            {words[index].text}
          </h2>
          <p className="text-2xl text-white/80 font-light mt-2 italic">
            {words[index].sub}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Home = () => {
  const upcomingEvents = EVENTS.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax for Hero
  const yHero = useTransform(scrollYProgress, [0, 0.5], ["0%", "30%"]);
  const haloRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#2b0a0a]">
      <ImmersiveLayer />
      
      {/* Video Background Hero Section */}
      <section ref={heroRef} className="relative h-[100vh] flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
            poster="https://images.pexels.com/photos/2186581/pexels-photo-2186581.jpeg"
          >
            {/* Using a reliable ethereal/particle video source */}
            <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlays for readability and theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2b0a0a] via-[#2b0a0a]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a0a] via-transparent to-black/60" />
        </div>

        {/* Content Container - Split Layout */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            
            {/* Left Side: Text Slider */}
            <div className="space-y-8 order-1 lg:order-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                 <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                    <div className="h-[2px] w-12 bg-sunflower-gold" />
                    <span className="text-sunflower-gold uppercase tracking-[0.3em] text-sm font-semibold">Welcome to Yellamma Thalli Devasthanam</span>
                 </div>
                 
                 <TextSlider />
                 
                 <p className="text-lg text-gray-300 max-w-lg mt-6 leading-relaxed font-light mx-auto lg:mx-0">
                    A sanctuary where ancient traditions meet modern spirituality. 
                    Join us in our journey of devotion, service, and inner awakening.
                 </p>
                 
                 <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                    <Link to="/events">
                       <Button size="lg" className="h-14 px-8 rounded-full bg-gradient-to-r from-tomato to-coral-glow hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,101,66,0.4)] text-lg font-bold">
                          Explore Events
                       </Button>
                    </Link>
                    <Link to="/donate">
                       <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-sunflower-gold text-sunflower-gold hover:bg-sunflower-gold hover:text-black transition-all text-lg">
                          Make Offering
                       </Button>
                    </Link>
                 </div>
              </motion.div>
            </div>

            {/* Right Side: Durga Image */}
            <div className="order-2 lg:order-2 flex justify-center lg:justify-end relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 1.2, delay: 0.2 }}
                 className="relative z-10"
               >
                 {/* Glowing Halo Effect */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-sunflower-gold/20 blur-[80px] rounded-full animate-pulse" />
                 
                 {/* Main Image Frame */}
                 <div className="relative rounded-t-[200px] rounded-b-[20px] overflow-hidden border-2 border-sunflower-gold/30 p-2 bg-white/5 backdrop-blur-sm shadow-2xl">
                    <div className="rounded-t-[190px] rounded-b-[15px] overflow-hidden relative h-[500px] w-[350px] md:h-[600px] md:w-[450px]">
                       <img 
                         src="https://images.unsplash.com/photo-1728535196944-58deb0547cb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzZ8MHwxfHNlYXJjaHw0fHxkdXJnYSUyMHN0YXR1ZXxlbnwwfHx8fDE3NjcwMDE2Mzh8MA&ixlib=rb-4.1.0&q=85" 
                         alt="Goddess Durga" 
                         className="w-full h-full object-cover"
                       />
                       {/* Overlay Gradient */}
                       <div className="absolute inset-0 bg-gradient-to-t from-[#2b0a0a] via-transparent to-transparent opacity-40" />
                       
                       {/* Floating Particles/Decor inside image */}
                       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 mix-blend-overlay" />
                    </div>
                 </div>
                 
                 {/* Floating Element - Om/Trident */}
                 <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-8 -right-8 bg-[#3a1010] p-4 rounded-full border border-sunflower-gold shadow-xl hidden md:block"
                 >
                    <Sun className="w-8 h-8 text-sunflower-gold animate-spin-slow" />
                 </motion.div>
               </motion.div>
            </div>

          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 2, duration: 1 }}
           className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-xs uppercase tracking-widest text-sunflower-gold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-sunflower-gold to-transparent"
          />
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
                  <Bell className="h-16 w-16 text-sunflower-gold" />
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
