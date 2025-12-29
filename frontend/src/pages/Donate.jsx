
import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Heart, CreditCard } from 'lucide-react';
import { toast } from 'sonner';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(51);
  const [customAmount, setCustomAmount] = useState('');

  const handleDonate = () => {
    const amount = customAmount || selectedAmount;
    toast.success(`Thank you for your generous donation of $${amount}! (Mock Payment)`);
  };

  return (
    <div className="py-20 bg-gradient-to-br from-secondary/10 to-background min-h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full px-4">
        <div className="text-center mb-10">
          <Heart className="w-16 h-16 text-tomato mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl font-bold text-foreground mb-2">Support Our Temple</h1>
          <p className="text-muted-foreground">Your contribution helps us sustain our spiritual and community activities.</p>
        </div>

        <Card className="border-t-4 border-t-tomato shadow-xl">
          <CardHeader className="text-center pb-2">
            <CardTitle className="text-2xl">Make a One-Time Donation</CardTitle>
            <CardDescription>Secure payment processing</CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[21, 51, 101, 501].map((amount) => (
                <button
                  key={amount}
                  onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 font-bold text-lg ${
                    selectedAmount === amount && !customAmount
                      ? 'border-tomato bg-tomato/5 text-tomato shadow-inner'
                      : 'border-border hover:border-tomato/50 text-muted-foreground'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label className="text-sm font-medium mb-2 block">Or enter a custom amount</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold">$</span>
                <Input
                  type="number"
                  placeholder="Custom Amount"
                  className="pl-8 h-12 text-lg"
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
              className="w-full bg-gradient-to-r from-tomato to-tomato-2 hover:from-tomato-2 hover:to-tomato text-white font-bold h-12 text-lg shadow-md"
              onClick={handleDonate}
            >
              <CreditCard className="w-5 h-5 mr-2" /> Donate Now
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-6">
              Divine Temple is a 501(c)(3) non-profit organization. Your donation is tax-deductible.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Donate;
