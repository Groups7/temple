
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Calendar, ArrowRight, HeartHandshake } from 'lucide-react';
import { EVENTS } from '../mockData';

const Home = () => {
  const upcomingEvents = EVENTS.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2186581/pexels-photo-2186581.jpeg" 
            alt="Temple Sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-sunlit-clay/20 mix-blend-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1 px-3 rounded-full bg-tomato/20 border border-tomato/40 text-tomato-2 font-semibold text-sm backdrop-blur-sm mb-4">
            Welcome to Divine Temple
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-lg">
            A Sanctuary for <span className="text-sunflower-gold">Peace</span> & <span className="text-sandy-brown">Devotion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
            Join our vibrant community in celebration of spirituality, culture, and service. 
            Find inner peace and connect with the divine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/events">
              <Button size="lg" className="w-full sm:w-auto bg-sunflower-gold hover:bg-honey-bronze text-black font-semibold">
                Upcoming Events
              </Button>
            </Link>
            <Link to="/donate">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/10 hover:text-white">
                Make a Donation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Intro/Mission Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sunlit-clay to-tomato rounded-2xl blur-lg opacity-30"></div>
              <img 
                src="https://images.pexels.com/photos/35406980/pexels-photo-35406980.jpeg" 
                alt="Deity" 
                className="relative rounded-xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Discover the Path to Enlightenment</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-tomato to-sunflower-gold rounded-full"></div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our temple is more than just a place of worship; it is a center for community, 
                learning, and spiritual growth. We are dedicated to preserving our rich traditions 
                while fostering an environment of inclusivity and peace.
              </p>
              <ul className="space-y-3">
                {[
                  "Daily Prayers & Rituals",
                  "Community Service & Charity",
                  "Cultural Education & Classes",
                  "Meditation & Yoga"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="h-2 w-2 rounded-full bg-tomato"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="inline-flex items-center text-tomato font-semibold hover:text-tomato-2 mt-4">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground">Join us in our upcoming celebrations and rituals.</p>
            </div>
            <Link to="/events" className="hidden sm:flex items-center text-tomato font-semibold hover:underline">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden border-border/50 hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-foreground shadow-sm">
                    {event.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-tomato text-sm font-medium mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date} • {event.time}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link to="/events">
              <Button variant="outline" className="w-full">View All Events</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-tomato/90 to-sunlit-clay/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <HeartHandshake className="h-16 w-16 text-white mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Support Our Mission</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Your generous contributions help us maintain the temple, organize community events, 
            and support those in need. Every donation makes a difference.
          </p>
          <Link to="/donate">
            <Button size="lg" className="bg-white text-tomato hover:bg-gray-100 font-bold px-8 shadow-xl">
              Donate Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
