
import React from 'react';
import { GALLERY_IMAGES } from '../mockData';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';
import { FadeIn, StaggerContainer, StaggerItem } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const Gallery = () => {
  return (
    <div className="py-12 bg-background min-h-screen relative overflow-hidden">
      <MandalaBackground opacity={0.04} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Photo Gallery</h1>
            <p className="text-muted-foreground text-lg">Glimpses of our temple, deities, and community celebrations.</p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GALLERY_IMAGES.map((img, index) => (
            <StaggerItem key={index}>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-80 shadow-md hover:shadow-2xl transition-all duration-500 border border-border/50">
                    <img 
                      src={img.src} 
                      alt={img.alt} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {img.alt}
                      </p>
                      <p className="text-white/70 text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        Click to expand
                      </p>
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-5xl p-0 border-none bg-transparent shadow-2xl">
                   <div className="relative rounded-lg overflow-hidden bg-black">
                     <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-auto max-h-[85vh] object-contain"
                      />
                   </div>
                </DialogContent>
              </Dialog>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
};

export default Gallery;
