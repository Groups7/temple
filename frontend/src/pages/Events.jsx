
import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Clock, MapPin, Search, Filter, ArrowRight, Sun, Music, BookOpen, Users } from 'lucide-react';
import { EVENTS } from '../mockData';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';
import { motion } from 'framer-motion';

const Events = () => {
  const [filter, setFilter] = useState('All');

  const filters = ["All", "Festivals", "Daily Rituals", "Classes", "Service"];
  
  // Extended Mock Data for Calendar
  const calendarDays = Array.from({ length: 35 }, (_, i) => i + 1);
  const calendarEvents = {
    5: { type: 'Ritual', title: 'Morning Aarti', color: 'bg-blue-500/20 text-blue-200 border-blue-500/30' },
    12: { type: 'Class', title: 'Gita Class', color: 'bg-purple-500/20 text-purple-200 border-purple-500/30' },
    15: { type: 'Festival', title: 'Amavasya', color: 'bg-tomato/20 text-tomato border-tomato/30' },
    24: { type: 'Music', title: 'Bhajan Sandhya', color: 'bg-sunflower-gold/20 text-sunflower-gold border-sunflower-gold/30' },
    28: { type: 'Festival', title: 'Purnima Puja', color: 'bg-pink-500/20 text-pink-200 border-pink-500/30' },
  };

  const todaySchedule = [
    { time: "06:00 AM", title: "Mangala Aarti", icon: Sun },
    { time: "08:30 AM", title: "Darshan Open", icon: Users },
    { time: "07:00 PM", title: "Evening Bhajan", icon: Music },
    { time: "09:00 PM", title: "Shayan Aarti", icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-[#2b0a0a] relative overflow-hidden">
      <MandalaBackground opacity={0.1} color="var(--sunflower-gold)" />
      
      {/* Hero Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#3a1010] to-[#2b0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-sunflower-gold to-tomato mb-4">
              Sacred Gatherings & Festivals
            </h1>
            <p className="text-white/70 max-w-2xl text-xl font-light">
              Join our community in celebration, prayer, and service.
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
           <div className="flex flex-wrap gap-2">
              {filters.map((f) => (
                 <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                       filter === f 
                       ? 'bg-sunflower-gold text-black border-sunflower-gold shadow-[0_0_15px_rgba(255,198,105,0.4)]' 
                       : 'bg-transparent text-white/70 border-white/20 hover:border-sunflower-gold hover:text-sunflower-gold'
                    }`}
                 >
                    {f}
                 </button>
              ))}
           </div>
           <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
              <input 
                 type="text" 
                 placeholder="Search ceremonies..." 
                 className="pl-10 pr-4 py-2 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-sunflower-gold w-full md:w-64"
              />
           </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
           
           {/* Left Column: Calendar & Today's Schedule */}
           <div className="lg:col-span-8 space-y-12">
              
              {/* Calendar View */}
              <FadeIn>
                 <div className="bg-[#3a1010] rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <div className="flex justify-between items-center mb-8">
                       <h2 className="text-2xl font-serif text-white">October 2025</h2>
                       <div className="flex gap-2">
                          <Button size="icon" variant="ghost" className="text-white/60 hover:text-white"><ArrowRight className="rotate-180 w-4 h-4" /></Button>
                          <Button size="icon" variant="ghost" className="text-white/60 hover:text-white"><ArrowRight className="w-4 h-4" /></Button>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-4 mb-4 text-center">
                       {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                          <div key={day} className="text-white/40 text-xs uppercase tracking-wider">{day}</div>
                       ))}
                    </div>
                    
                    <div className="grid grid-cols-7 gap-4">
                       {calendarDays.map((day) => {
                          const event = calendarEvents[day];
                          const isToday = day === 24; // Mock Today
                          return (
                             <div 
                                key={day} 
                                className={`aspect-square rounded-xl p-2 relative group transition-all duration-300 ${
                                   isToday ? 'bg-white/10 ring-1 ring-sunflower-gold' : 'bg-black/20 hover:bg-white/5'
                                }`}
                             >
                                <span className={`text-sm ${isToday ? 'text-sunflower-gold font-bold' : 'text-white/60'}`}>{day}</span>
                                {event && (
                                   <div className={`mt-2 p-1.5 rounded-lg text-[10px] leading-tight font-medium border ${event.color} truncate`}>
                                      {event.title}
                                   </div>
                                )}
                             </div>
                          );
                       })}
                    </div>
                 </div>
              </FadeIn>

              {/* Today's Schedule Strip */}
              <FadeIn delay={0.2}>
                 <div>
                    <h3 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
                       <Clock className="w-5 h-5 text-sunflower-gold" /> Today's Schedule
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                       {todaySchedule.map((item, idx) => (
                          <div key={idx} className="bg-[#3a1010] p-4 rounded-2xl border border-white/5 hover:border-sunflower-gold/30 transition-colors group">
                             <item.icon className="w-6 h-6 text-tomato mb-3 group-hover:scale-110 transition-transform" />
                             <div className="text-sm font-bold text-white mb-1">{item.time}</div>
                             <div className="text-xs text-white/60">{item.title}</div>
                          </div>
                       ))}
                    </div>
                 </div>
              </FadeIn>
           </div>

           {/* Right Column: Featured Events List */}
           <div className="lg:col-span-4 space-y-6">
              <h3 className="text-xl font-serif text-white mb-2">Featured Events</h3>
              
              <StaggerContainer className="flex flex-col gap-6">
                 {EVENTS.map((event, idx) => (
                    <StaggerItem key={event.id}>
                       <Card className="bg-[#3a1010] border-none overflow-hidden hover:shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-shadow duration-300 group">
                          <div className="h-40 relative overflow-hidden">
                             <img 
                                src={event.image} 
                                alt={event.title} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                             />
                             <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                <span className="text-xs font-bold text-sunflower-gold uppercase tracking-wider">{event.category}</span>
                             </div>
                             
                             {/* Date Badge */}
                             <div className="absolute bottom-3 right-3 bg-tomato text-white px-3 py-1 rounded-lg shadow-lg text-center">
                                <span className="block text-xs font-bold">OCT</span>
                                <span className="block text-lg font-bold leading-none">{10 + idx * 5}</span>
                             </div>
                          </div>
                          
                          <CardContent className="p-6">
                             <h4 className="text-xl font-bold text-white mb-2 group-hover:text-sunflower-gold transition-colors">{event.title}</h4>
                             
                             <div className="flex items-center gap-4 text-xs text-white/50 mb-4">
                                <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {event.time}</span>
                                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> Main Hall</span>
                             </div>
                             
                             <p className="text-white/70 text-sm mb-6 line-clamp-2">
                                {event.description}
                             </p>
                             
                             <div className="flex gap-3">
                                <Button className="flex-1 bg-sunflower-gold text-black hover:bg-white text-xs font-bold h-9">
                                   Register Now
                                </Button>
                                <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 text-xs h-9">
                                   Details
                                </Button>
                             </div>
                          </CardContent>
                       </Card>
                    </StaggerItem>
                 ))}
                 
                 {/* Newsletter Card */}
                 <div className="bg-gradient-to-br from-tomato to-coral-glow rounded-2xl p-6 text-center mt-6 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <h4 className="text-xl font-bold text-white mb-2 relative z-10">Stay Connected</h4>
                    <p className="text-white/90 text-sm mb-4 relative z-10">Subscribe to our newsletter for daily darshan and event updates.</p>
                    <div className="flex gap-2 relative z-10">
                       <input 
                          type="email" 
                          placeholder="Email address" 
                          className="flex-1 px-3 py-2 rounded-lg bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none text-sm"
                       />
                       <Button size="sm" className="bg-white text-tomato hover:bg-white/90 font-bold">
                          Join
                       </Button>
                    </div>
                 </div>
              </StaggerContainer>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
