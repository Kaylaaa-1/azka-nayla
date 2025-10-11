import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import batikPattern from "@/assets/batik-pattern.jpg";

interface LandingPageProps {
  guestName: string;
  onEnter: () => void;
}

const LandingPage = ({ guestName, onEnter }: LandingPageProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
      style={{
        backgroundImage: `url(${batikPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/95" />
      
      <div 
        className={`relative z-10 text-center px-6 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <Heart 
          className="w-16 h-16 mx-auto mb-8 text-secondary animate-float"
          fill="currentColor"
        />
        
        <p className="text-secondary text-sm md:text-base mb-4 tracking-widest uppercase font-serif">
          The Wedding of
        </p>
        
        <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-secondary mb-8 animate-fade-in">
          Azka & Nayla
        </h1>
        
        <div className="w-32 h-0.5 bg-secondary/50 mx-auto mb-8" />
        
        {guestName && (
          <div className="mb-8 animate-fade-in-up">
            <p className="text-cream text-sm md:text-base mb-2 font-serif">
              Kepada Yth.
            </p>
            <p className="text-secondary text-xl md:text-2xl font-semibold font-serif">
              {guestName}
            </p>
          </div>
        )}
        
        <p className="text-cream/90 text-sm md:text-base mb-10 max-w-md mx-auto leading-relaxed font-serif">
          Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami
        </p>
        
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 py-6 text-base md:text-lg rounded-full shadow-gold transition-all duration-300 hover:scale-105 animate-scale-in font-serif"
        >
          Buka Undangan
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
