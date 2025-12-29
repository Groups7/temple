
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, HeartHandshake, Sparkles } from 'lucide-react';
import { EVENTS } from '../mockData';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const Home = () => {
  const upcomingEvents = EVENTS.slice(0, 3);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-background">
      {/* Dynamic Parallax Hero Section */}
      <section ref={heroRef} className="relative h-[95vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yBg }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.pexels.com/photos/2186581/pexels-photo-2186581.jpeg" 
            alt="Temple Sunset" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-background/90" />
        </motion.div>
        
        {/* Animated Particles/Stars Overlay (Simulated with CSS/framer) */}
        <div className="absolute inset-0 z-0 opacity-30">
             {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-sunflower-gold rounded-full blur-[1px]"
                  style={{
                    width: Math.random() * 4 + 2 + "px",
                    height: Math.random() * 4 + 2 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 1, 0.2],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 2,
                  }}
                />
             ))}
        </div>

        <motion.div 
          style={{ opacity: opacityHero }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
             <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-sunflower-gold font-medium text-sm backdrop-blur-md">
                <Sparkles className="w-3 h-3" /> Welcome to Divine Temple
             </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter drop-shadow-2xl">
             <motion.span 
               initial={{ opacity: 0, x: -50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="block text-transparent bg-clip-text bg-gradient-to-r from-sunflower-gold to-sandy-brown"
             >
               Sanctuary
             </motion.span>
             <motion.span 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8, delay: 0.6 }}
               className="block text-2xl md:text-4xl lg:text-5xl font-light mt-2 italic text-white/90"
             >
               for Peace & Devotion
             </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Join our vibrant community in celebration of spirituality, culture, and service. 
            Find inner peace and connect with the divine.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
          >
            <Link to="/events">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 bg-gradient-to-r from-sunflower-gold to-honey-bronze hover:from-honey-bronze hover:to-sunflower-gold text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,198,105,0.4)] transition-all duration-300 hover:scale-105">
                Upcoming Events
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 px-8 rounded-full bg-transparent text-white border-white/30 hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm">
                Make a Donation
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-12 rounded-full bg-gradient-to-b from-white to-transparent"
          />
        </motion.div>
      </section>

      {/* Intro/Mission Section with Unique Layout */}
      <section className="py-32 bg-background relative overflow-hidden">
        <MandalaBackground opacity={0.08} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Image Composite */}
            <div className="lg:col-span-7 relative">
               <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative z-10"
               >
                 <div className="absolute -inset-4 bg-gradient-to-tr from-sunlit-clay to-tomato rounded-full blur-2xl opacity-20 animate-pulse"></div>
                 <img 
                   src="https://images.pexels.com/photos/35406980/pexels-photo-35406980.jpeg" 
                   alt="Deity" 
                   className="relative rounded-[2rem] shadow-2xl w-full h-[600px] object-cover"
                   style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
                 />
                 
                 {/* Floating Element */}
                 <motion.div 
                   animate={{ y: [0, -15, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="absolute -bottom-10 -right-10 bg-card p-6 rounded-xl shadow-xl border border-border/50 max-w-xs hidden md:block"
                 >
                    <p className="font-serif italic text-lg text-tomato leading-tight">"Peace comes from within. Do not seek it without."</p>
                    <p className="text-xs text-muted-foreground mt-2 text-right">— Ancient Wisdom</p>
                 </motion.div>
               </motion.div>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  Discover the Path to <span className="text-transparent bg-clip-text bg-gradient-to-r from-tomato to-sunlit-clay">Enlightenment</span>
                </h2>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our temple is more than just a place of worship; it is a center for community, 
                  learning, and spiritual growth. We preserve rich traditions while fostering inclusivity.
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-4" staggerDelay={0.15}>
                {[
                  "Daily Prayers & Rituals",
                  "Community Service & Charity",
                  "Cultural Education & Classes",
                  "Meditation & Yoga"
                ].map((item, i) => (
                  <StaggerItem key={i} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-tomato/10 flex items-center justify-center group-hover:bg-tomato/20 transition-colors">
                      <div className="h-2 w-2 rounded-full bg-tomato"></div>
                    </div>
                    <span className="text-foreground font-medium text-lg">{item}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <FadeIn delay={0.6}>
                <Link to="/about">
                   <Button variant="ghost" className="text-tomato hover:text-tomato-2 hover:bg-tomato/5 group p-0 text-lg">
                      Learn More About Us <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </Button>
                </Link>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview with Hover Cards */}
      <section className="py-32 bg-secondary/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us in our upcoming celebrations and rituals.</p>
            </div>
            <Link to="/events" className="hidden sm:flex items-center text-tomato font-semibold hover:underline">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <StaggerItem key={event.id}>
                <Card className="group overflow-hidden border-none bg-background shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="h-56 overflow-hidden relative">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                      {event.category}
                    </div>
                  </div>
                  <CardContent className="p-8 relative">
                    <div className="absolute -top-6 left-8 bg-tomato text-white px-4 py-2 rounded-lg shadow-lg text-center min-w-[60px]">
                        <span className="block text-xs uppercase font-bold opacity-80">Date</span>
                        <span className="block font-bold text-lg leading-none">{event.date.split(" ")[1]?.replace(',','') || "Daily"}</span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="flex items-center text-muted-foreground text-sm font-medium">
                        <Calendar className="h-4 w-4 mr-2 text-tomato" />
                        {event.time}
                      </div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-tomato transition-colors">{event.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">{event.description}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border/40 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <span className="text-sm font-semibold text-tomato">Join Event</span>
                        <ArrowRight className="h-4 w-4 text-tomato" />
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <div className="mt-12 text-center sm:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Gradient and Texture */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tomato via-coral-glow to-sandy-brown"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply"></div>
        
        {/* Animated Shapes */}
        <motion.div 
           animate={{ rotate: 360, scale: [1, 1.1, 1] }}
           transition={{ duration: 20, repeat: Infinity }}
           className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"
        />
        <motion.div 
           animate={{ rotate: -360, scale: [1, 1.2, 1] }}
           transition={{ duration: 25, repeat: Infinity }}
           className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-sunflower-gold/10 rounded-full blur-3xl"
        />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <ScaleIn>
            <div className="inline-block p-4 rounded-full bg-white/10 backdrop-blur-md mb-8 ring-1 ring-white/30 shadow-2xl">
              <HeartHandshake className="h-12 w-12 text-white" />
            </div>
          </ScaleIn>
          
          <FadeIn delay={0.2}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">Support Our Divine Mission</h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Your generous contributions help us maintain the temple, organize community events, 
              and support those in need. Every donation makes a difference.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <Link to="/donate">
              <Button size="lg" className="h-16 px-10 text-lg bg-white text-tomato hover:bg-white/90 hover:scale-105 transform transition-all duration-300 font-bold shadow-2xl rounded-full">
                Donate Today
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
