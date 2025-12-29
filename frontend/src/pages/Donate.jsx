
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Heart, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import MandalaBackground from '../components/MandalaBackground';
import ImmersiveLayer from '../components/ImmersiveLayer';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(51);
  const [customAmount, setCustomAmount] = useState('');
  const [isDonating, setIsDonating] = useState(false);

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    setIsDonating(true);
    
    // Simulate "Offering" animation
    setTimeout(() => {
        setIsDonating(false);
        toast.success(`🙏 Blessings! Thank you for your offering of $${amount}.`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#0c0502] text-white relative overflow-hidden flex flex-col items-center justify-center py-20">
      <ImmersiveLayer />
      <MandalaBackground opacity={0.1} color="var(--sunflower-gold)" />

      <div className="max-w-4xl w-full px-4 relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-12"
        >
          <div className="inline-block p-4 rounded-full bg-tomato/10 mb-4 ring-1 ring-tomato/30">
             <Heart className="w-12 h-12 text-tomato animate-pulse" />
          </div>
          <h1 className="text-5xl font-serif text-sunflower-gold mb-4">Digital Hundi</h1>
          <p className="text-white/60 text-lg">Your support helps light the lamp of knowledge and devotion.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Donation Visualizer / Hundi Animation */}
            <div className="relative h-[400px] flex items-center justify-center bg-[#1a0f0a] rounded-3xl border border-white/5 shadow-2xl overflow-hidden group">
                {/* The "Hundi" Slot */}
                <div className="w-64 h-2 bg-black rounded-full shadow-[0_0_20px_rgba(255,101,66,0.5)] z-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-tomato to-transparent opacity-50" />
                </div>
                
                {/* Floating Coins/Flowers Animation Area */}
                <AnimatePresence>
                    {isDonating && (
                        <motion.div
                           initial={{ y: -200, opacity: 0, rotateX: 0 }}
                           animate={{ y: 0, opacity: 1, rotateX: 360 }}
                           exit={{ y: 200, opacity: 0, scale: 0.5 }}
                           transition={{ duration: 1.5, ease: "anticipate" }}
                           className="absolute z-30"
                        >
                            <div className="w-24 h-16 bg-gradient-to-r from-sunflower-gold to-honey-bronze rounded-md shadow-xl flex items-center justify-center border-2 border-white/20">
                                <span className="font-bold text-black shadow-sm">${customAmount || selectedAmount}</span>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tomato/5 via-transparent to-transparent opacity-50" />
                <Sparkles className="absolute top-1/4 left-1/4 text-sunflower-gold w-4 h-4 animate-pulse" />
                <Sparkles className="absolute bottom-1/4 right-1/4 text-sunflower-gold w-6 h-6 animate-pulse delay-75" />
                <p className="absolute bottom-8 text-xs text-white/30 uppercase tracking-widest">Secure Offering Processing</p>
            </div>

            {/* Donation Controls */}
            <Card className="bg-[#1a0f0a] border-white/10 backdrop-blur-xl shadow-2xl">
              <CardContent className="p-8 space-y-8">
                <div>
                    <label className="text-sm font-medium text-white/60 mb-4 block">Select Offering Amount</label>
                    <div className="grid grid-cols-2 gap-4">
                    {[21, 51, 101, 501].map((amount) => (
                        <motion.button
                        key={amount}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                        className={`p-4 rounded-xl border transition-all duration-200 font-bold text-lg relative overflow-hidden ${
                            selectedAmount === amount && !customAmount
                            ? 'border-sunflower-gold bg-sunflower-gold/10 text-sunflower-gold shadow-[0_0_15px_rgba(255,198,105,0.3)]'
                            : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                        }`}
                        >
                        ${amount}
                        </motion.button>
                    ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="relative group">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 font-semibold group-focus-within:text-sunflower-gold transition-colors">$</span>
                        <Input
                        type="number"
                        placeholder="Custom Amount"
                        className="pl-10 h-14 text-lg bg-black/20 border-white/10 focus:border-sunflower-gold text-white placeholder:text-white/20 rounded-xl transition-all"
                        value={customAmount}
                        onChange={(e) => {
                            setCustomAmount(e.target.value);
                            setSelectedAmount(null);
                        }}
                        />
                    </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-14 text-lg bg-gradient-to-r from-tomato to-coral-glow hover:from-coral-glow hover:to-tomato text-white font-bold rounded-full shadow-lg hover:shadow-tomato/40 transition-all duration-300"
                  onClick={handleDonate}
                  disabled={isDonating}
                >
                  {isDonating ? (
                      <span className="flex items-center gap-2"><Sparkles className="w-5 h-5 animate-spin" /> Processing Offering...</span>
                  ) : (
                      "Complete Offering"
                  )}
                </Button>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Donate;
