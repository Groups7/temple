
import React from 'react';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  return (
    <div className="py-12 bg-background min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">About Divine Temple</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Dedicated to preserving tradition, fostering spirituality, and serving the community since 1995.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Our History & Mission</h2>
            <div className="w-16 h-1 bg-tomato rounded-full"></div>
            <p className="text-muted-foreground leading-relaxed">
              Founded over two decades ago by a group of dedicated families, Divine Temple started as a small 
              gathering in a community hall. Through unwavering faith and the generous support of our devotees, 
              we have grown into a vibrant spiritual center.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to provide a sanctuary for worship, to educate our youth about our rich cultural 
              heritage, and to serve the broader community through charitable activities. We believe in the 
              universal values of peace, love, and compassion.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/14676831/pexels-photo-14676831.png" 
              alt="Temple Architecture" 
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Deities Section */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Deities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
               <div className="h-64 overflow-hidden rounded-t-lg">
                 <img 
                   src="https://images.pexels.com/photos/35406980/pexels-photo-35406980.jpeg" 
                   alt="Ganesh" 
                   className="w-full h-full object-cover transition-transform hover:scale-105"
                 />
               </div>
               <CardContent className="p-6 text-center">
                 <h3 className="text-xl font-bold mb-2">Lord Ganesha</h3>
                 <p className="text-muted-foreground text-sm">The remover of obstacles and the god of new beginnings.</p>
               </CardContent>
            </Card>
             <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
               <div className="h-64 overflow-hidden rounded-t-lg">
                 <img 
                   src="https://images.pexels.com/photos/35406978/pexels-photo-35406978.jpeg" 
                   alt="Krishna" 
                   className="w-full h-full object-cover transition-transform hover:scale-105"
                 />
               </div>
               <CardContent className="p-6 text-center">
                 <h3 className="text-xl font-bold mb-2">Lord Krishna</h3>
                 <p className="text-muted-foreground text-sm">The embodiment of love, compassion, and divine joy.</p>
               </CardContent>
            </Card>
             <Card className="border-border/50 hover:shadow-lg transition-all duration-300">
               <div className="h-64 overflow-hidden rounded-t-lg">
                 <img 
                   src="https://images.unsplash.com/photo-1616415326996-23d7665716ac" 
                   alt="Shiva" 
                   className="w-full h-full object-cover transition-transform hover:scale-105"
                 />
               </div>
               <CardContent className="p-6 text-center">
                 <h3 className="text-xl font-bold mb-2">Lord Shiva</h3>
                 <p className="text-muted-foreground text-sm">The transformer, representing the cyclical nature of existence.</p>
               </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
