
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';
import { FadeIn, ScaleIn } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success("Message sent successfully! We will get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="py-12 bg-secondary/5 min-h-screen relative overflow-hidden">
      <MandalaBackground opacity={0.03} color="var(--tomato)" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg">We'd love to hear from you. Reach out with any questions or feedback.</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <Card className="border-none shadow-lg bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>Visit us or contact us via phone or email.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="bg-tomato/10 p-4 rounded-full group-hover:bg-tomato/20 transition-colors">
                      <MapPin className="h-6 w-6 text-tomato" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Visit Us</h3>
                      <p className="text-muted-foreground mt-1">123 Spiritual Avenue<br />Peace City, PC 54321</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="bg-tomato/10 p-4 rounded-full group-hover:bg-tomato/20 transition-colors">
                      <Phone className="h-6 w-6 text-tomato" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Call Us</h3>
                      <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                      <p className="text-xs text-muted-foreground mt-1">Mon-Fri: 9am - 5pm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="bg-tomato/10 p-4 rounded-full group-hover:bg-tomato/20 transition-colors">
                      <Mail className="h-6 w-6 text-tomato" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email Us</h3>
                      <p className="text-muted-foreground mt-1">info@divinetemple.org</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
            
            {/* Map Placeholder */}
            <ScaleIn delay={0.4}>
              <div className="h-72 bg-gray-200 rounded-2xl overflow-hidden relative shadow-lg border-4 border-white">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1626883204996!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Map"
                  className="filter grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
              </div>
            </ScaleIn>
          </div>

          {/* Contact Form */}
          <FadeIn delay={0.3} className="h-full">
            <Card className="border-none shadow-xl bg-background h-full">
              <CardHeader className="bg-gradient-to-r from-tomato to-tomato-2 text-white rounded-t-xl p-8">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-white/80">Fill out the form below and we will respond as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your Name" 
                      className="h-12 bg-secondary/5 border-border/50 focus:border-tomato"
                      value={formData.name} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="h-12 bg-secondary/5 border-border/50 focus:border-tomato"
                      value={formData.email} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="How can we help?" 
                      className="h-12 bg-secondary/5 border-border/50 focus:border-tomato"
                      value={formData.subject} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Write your message here..." 
                      className="min-h-[150px] bg-secondary/5 border-border/50 focus:border-tomato resize-none"
                      value={formData.message} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 text-lg bg-tomato hover:bg-tomato-2 text-white shadow-lg hover:shadow-tomato/40 transition-all duration-300">
                    <Send className="w-5 h-5 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Contact;
