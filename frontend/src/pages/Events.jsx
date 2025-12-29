
import React from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { EVENTS } from '../mockData';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const Events = () => {
  return (
    <div className="py-12 bg-secondary/5 min-h-screen relative overflow-hidden">
      <MandalaBackground opacity={0.03} color="var(--sunflower-gold)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Temple Events</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Participate in our daily rituals, festivals, and community gatherings.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid gap-8">
          {EVENTS.map((event) => (
            <StaggerItem key={event.id}>
              <Card className="flex flex-col md:flex-row overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group bg-background">
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                   <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
                <div className="p-8 flex flex-col justify-center flex-1 relative">
                   <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                      <Calendar className="w-24 h-24 text-tomato" />
                   </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-tomato mb-4">
                    <span className="flex items-center bg-tomato/10 px-3 py-1 rounded-full"><Calendar className="w-4 h-4 mr-2" /> {event.date}</span>
                    <span className="flex items-center bg-tomato/10 px-3 py-1 rounded-full"><Clock className="w-4 h-4 mr-2" /> {event.time}</span>
                    <span className="bg-sunflower-gold/20 text-foreground px-3 py-1 rounded-full text-xs border border-sunflower-gold/30">{event.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground group-hover:text-tomato transition-colors">{event.title}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                    {event.description}
                  </p>
                  <div className="flex gap-4">
                    <Button className="bg-tomato hover:bg-tomato-2 text-white shadow-lg hover:shadow-tomato/30 transition-all duration-300">Add to Calendar</Button>
                    <Button variant="outline" className="border-tomato/30 text-tomato hover:bg-tomato/5">Learn More</Button>
                  </div>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Events;
