
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Calendar, Clock } from 'lucide-react';
import { EVENTS } from '../mockData';

const Events = () => {
  return (
    <div className="py-12 bg-secondary/5 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Temple Events</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Participate in our daily rituals, festivals, and community gatherings.
          </p>
        </div>

        <div className="grid gap-8">
          {EVENTS.map((event) => (
            <Card key={event.id} className="flex flex-col md:flex-row overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300">
              <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                 <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover absolute inset-0"
                />
              </div>
              <div className="p-8 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-4 text-sm font-medium text-tomato mb-4">
                  <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {event.date}</span>
                  <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {event.time}</span>
                  <span className="bg-tomato/10 px-2 py-0.5 rounded-full text-xs">{event.category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{event.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {event.description}
                </p>
                <div className="flex gap-4">
                  <Button className="bg-tomato hover:bg-tomato-2 text-white">Add to Calendar</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;
