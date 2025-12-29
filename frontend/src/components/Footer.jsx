
import React from 'react';
import { Sun, Mail, MapPin, Phone, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/10 pt-16 pb-8 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Sun className="h-6 w-6 text-tomato" />
              <span className="font-bold text-lg">Divine Temple</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              A sanctuary for spiritual growth, community connection, and inner peace. 
              Join us in our journey of devotion and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-tomato transition-colors">About Us</Link></li>
              <li><Link to="/events" className="text-muted-foreground hover:text-tomato transition-colors">Upcoming Events</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-tomato transition-colors">Photo Gallery</Link></li>
              <li><Link to="/donate" className="text-muted-foreground hover:text-tomato transition-colors">Make a Donation</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-tomato shrink-0" />
                <span>123 Spiritual Avenue,<br />Peace City, PC 54321</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-tomato shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-tomato shrink-0" />
                <span>info@divinetemple.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Temple Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>6:00 AM - 9:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Sat - Sun:</span>
                <span>5:30 AM - 10:00 PM</span>
              </p>
              <div className="mt-6 pt-6 border-t border-border/20">
                 <p className="text-xs text-muted-foreground">
                   Follow us on social media for daily updates.
                 </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © 2025 Divine Temple. Made with <Heart className="h-3 w-3 text-tomato fill-current" /> for the community.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
