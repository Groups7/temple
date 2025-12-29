
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../mockData';
import { Dialog, DialogContent, DialogTrigger } from '../components/ui/dialog';

const Gallery = () => {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">Photo Gallery</h1>
          <p className="text-muted-foreground">Glimpses of our temple, deities, and community celebrations.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="relative group cursor-pointer overflow-hidden rounded-xl h-80">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Image
                    </p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 border-none bg-transparent shadow-none">
                 <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto rounded-lg max-h-[85vh] object-contain"
                  />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
