import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Bed, Users, Wifi, Car, Utensils, Phone, Calendar, MapPin, CheckCircle, Star } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/ui/AnimatedSection';
import MandalaBackground from '../components/MandalaBackground';

const Accommodation = () => {
  const accommodationOptions = [
    {
      id: 1,
      title: "VIP Guest Suite",
      type: "Premium",
      capacity: "2-4 guests",
      price: "₹2,500/night",
      image: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
      description: "Spacious suite with attached bathroom, AC, and temple view",
      amenities: ["Attached Bathroom", "Air Conditioning", "Temple View", "Room Service", "WiFi"]
    },
    {
      id: 2,
      title: "Family Guest Room",
      type: "Standard",
      capacity: "4-6 guests",
      price: "₹1,800/night",
      image: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
      description: "Comfortable family accommodation with shared facilities",
      amenities: ["Shared Bathroom", "Fan", "Garden View", "Laundry Service", "WiFi"]
    },
    {
      id: 3,
      title: "Dormitory Hall",
      type: "Budget",
      capacity: "10-15 guests",
      price: "₹500/person/night",
      image: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg",
      description: "Clean and simple dormitory accommodation for groups",
      amenities: ["Shared Facilities", "Basic Amenities", "Group Discount", "24/7 Security"]
    },
    {
      id: 4,
      title: "Marriage Hall",
      type: "Event",
      capacity: "200-500 guests",
      price: "₹50,000/day",
      image: "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg",
      description: "Grand hall for weddings and special ceremonies",
      amenities: ["Full Catering", "Sound System", "Decoration", "Parking", "Generator Backup"]
    }
  ];

  const facilities = [
    {
      icon: Bed,
      title: "Comfortable Stay",
      description: "Clean, hygienic rooms with comfortable bedding and basic amenities"
    },
    {
      icon: Utensils,
      title: "Temple Kitchen",
      description: "Sattvic meals prepared with devotion, served in traditional style"
    },
    {
      icon: Car,
      title: "Parking Facility",
      description: "Secure parking available for cars and two-wheelers"
    },
    {
      icon: Wifi,
      title: "WiFi Connectivity",
      description: "High-speed internet access throughout the premises"
    },
    {
      icon: Users,
      title: "24/7 Security",
      description: "Round-the-clock security and maintenance services"
    },
    {
      icon: Phone,
      title: "Emergency Contact",
      description: "Direct access to medical and emergency services nearby"
    }
  ];

  return (
    <div className="min-h-screen bg-[#2b0a0a] relative overflow-hidden">
      <MandalaBackground opacity={0.1} color="var(--sunflower-gold)" />

      {/* Header */}
      <div className="relative py-20 bg-gradient-to-b from-[#3a1010] to-[#2b0a0a] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-sunflower-gold to-tomato mb-6">
              Temple Accommodation
            </h1>
            <p className="text-white/70 max-w-3xl mx-auto text-xl font-light leading-relaxed">
              Experience spiritual comfort with our guest facilities and event halls.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 pb-24">

        {/* Accommodation Options */}
        <div>
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Guest Accommodations</h2>
            <p className="text-white/70">Comfortable stays for pilgrims and visitors</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {accommodationOptions.slice(0, 3).map((option) => (
              <StaggerItem key={option.id}>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-[#3a1010] backdrop-blur-sm overflow-hidden">
                  <div className="h-64 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-tomato/90 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-xs font-bold text-white">{option.type}</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full">
                      <span className="text-sm font-bold text-sunflower-gold">{option.price}</span>
                    </div>
                  </div>

                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-tomato transition-colors">
                          {option.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/70 mb-3">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {option.capacity}
                          </span>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-sunflower-gold fill-current" />
                        ))}
                        <Star className="w-4 h-4 text-gray-300" />
                      </div>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-6">
                      {option.description}
                    </p>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {option.amenities.map((amenity, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2 py-1 bg-white/10 rounded-full text-xs text-white/70">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <Button className="w-full bg-gradient-to-r from-tomato to-coral-glow hover:from-coral-glow hover:to-tomato text-white shadow-[0_0_15px_rgba(255,101,66,0.4)]">
                        Book Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Event Hall */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl font-bold text-white">Grand Marriage Hall</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-tomato to-sunflower-gold rounded-full"></div>
            <p className="text-white/70 leading-loose text-lg">
              Our magnificent marriage hall is designed to host grand weddings, religious ceremonies,
              and community gatherings. With capacity for 200-500 guests, modern amenities, and
              traditional aesthetics, it provides the perfect setting for your special occasions.
            </p>
            <p className="text-white/70 leading-loose text-lg">
              We offer complete event management services including catering, decoration, sound systems,
              and coordination with priests for religious ceremonies.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-tomato">200-500</div>
                <div className="text-sm text-white/60">Guest Capacity</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-sunflower-gold">₹50,000</div>
                <div className="text-sm text-white/60">Per Day</div>
              </div>
            </div>

            <Button className="bg-gradient-to-r from-tomato to-coral-glow hover:from-coral-glow hover:to-tomato text-white shadow-[0_0_15px_rgba(255,101,66,0.4)] px-8 py-3">
              <Calendar className="w-4 h-4 mr-2" />
              Check Availability
            </Button>
          </FadeIn>

          <div className="order-1 lg:order-2 relative group">
            <div className="absolute inset-0 bg-tomato/20 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-6 duration-500"></div>
            <ScaleIn>
              <img
                src={accommodationOptions[3].image}
                alt="Marriage Hall"
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover bg-white p-2"
              />
            </ScaleIn>
          </div>
        </div>

        {/* Facilities */}
        <div>
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Facilities</h2>
            <p className="text-white/70">Everything you need for a comfortable stay</p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <StaggerItem key={idx}>
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-tomato to-coral-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <facility.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-tomato transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Booking Information */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/10">
          <div className="text-center mb-12">
            <FadeIn>
              <h2 className="text-4xl font-bold text-white mb-4">Booking Information</h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Plan your spiritual retreat or special event with us. Contact our accommodation office for reservations and inquiries.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-tomato rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Contact Us</h3>
              <p className="text-white/70 mb-2">+91 98765 43210</p>
              <p className="text-white/70">accommodation@divinetemple.org</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-sunflower-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Advance Booking</h3>
              <p className="text-white/70 mb-2">Minimum 7 days</p>
              <p className="text-white/70">For events: 30 days</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-coral-glow rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Location</h3>
              <p className="text-white/70 mb-2">Temple Accommodation Office</p>
              <p className="text-white/70">Main Entrance, Yellamma Thalli Devasthanam</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-tomato to-coral-glow hover:from-coral-glow hover:to-tomato text-white shadow-[0_0_15px_rgba(255,101,66,0.4)] px-8 py-3 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call to Book Now
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Accommodation;
