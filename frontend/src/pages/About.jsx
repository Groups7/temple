
import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const About = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <MandalaBackground opacity={0.05} color="var(--tomato)" />
      
      {/* Header */}
      <div className="relative py-24 bg-gradient-to-b from-secondary/10 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">About Divine Temple</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-xl font-light">
              Dedicated to preserving tradition, fostering spirituality, and serving the community since 1995.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-24">
        
        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 md:order-1 space-y-8">
            <h2 className="text-4xl font-bold text-foreground">Our History & Mission</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-tomato to-sunflower-gold rounded-full"></div>
            <p className="text-muted-foreground leading-loose text-lg">
              Founded over two decades ago by a group of dedicated families, Divine Temple started as a small 
              gathering in a community hall. Through unwavering faith and the generous support of our devotees, 
              we have grown into a vibrant spiritual center.
            </p>
            <p className="text-muted-foreground leading-loose text-lg">
              Our mission is to provide a sanctuary for worship, to educate our youth about our rich cultural 
              heritage, and to serve the broader community through charitable activities. We believe in the 
              universal values of peace, love, and compassion.
            </p>
          </FadeIn>
          
          <div className="order-1 md:order-2 relative group">
             <div className="absolute inset-0 bg-tomato/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
             <ScaleIn>
                <img 
                  src="https://images.pexels.com/photos/14676831/pexels-photo-14676831.png" 
                  alt="Temple Architecture" 
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover bg-white p-2"
                />
             </ScaleIn>
          </div>
        </div>

        {/* Deities Section */}
        <div>
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Deities</h2>
            <p className="text-muted-foreground">The divine forms we worship</p>
          </FadeIn>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <StaggerItem>
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                 <div className="h-80 overflow-hidden rounded-t-lg relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                   <img 
                     src="https://images.pexels.com/photos/35406980/pexels-photo-35406980.jpeg" 
                     alt="Ganesh" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>
                 <CardContent className="p-8 text-center relative z-20 bg-card">
                   <h3 className="text-2xl font-bold mb-3 text-tomato">Lord Ganesha</h3>
                   <p className="text-muted-foreground leading-relaxed">The remover of obstacles and the god of new beginnings.</p>
                 </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
               <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                 <div className="h-80 overflow-hidden rounded-t-lg relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                   <img 
                     src="https://images.pexels.com/photos/35406978/pexels-photo-35406978.jpeg" 
                     alt="Krishna" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>
                 <CardContent className="p-8 text-center relative z-20 bg-card">
                   <h3 className="text-2xl font-bold mb-3 text-tomato">Lord Krishna</h3>
                   <p className="text-muted-foreground leading-relaxed">The embodiment of love, compassion, and divine joy.</p>
                 </CardContent>
              </Card>
            </StaggerItem>

            <StaggerItem>
               <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm">
                 <div className="h-80 overflow-hidden rounded-t-lg relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                   <img 
                     src="https://images.unsplash.com/photo-1616415326996-23d7665716ac" 
                     alt="Shiva" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                   />
                 </div>
                 <CardContent className="p-8 text-center relative z-20 bg-card">
                   <h3 className="text-2xl font-bold mb-3 text-tomato">Lord Shiva</h3>
                   <p className="text-muted-foreground leading-relaxed">The transformer, representing the cyclical nature of existence.</p>
                 </CardContent>
              </Card>
            </StaggerItem>
          </StaggerContainer>
        </div>

      </div>
    </div>
  );
};

export default About;
