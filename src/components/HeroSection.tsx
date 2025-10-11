import { useEffect, useState } from "react";
import heroCouple from "@/assets/hero-couple.jpg";
import goldOrnament from "@/assets/gold-ornament.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted via-background to-muted">
      {/* Ornament Top */}
      <div className="absolute top-0 left-0 right-0 h-32 opacity-30">
        <img src={goldOrnament} alt="" className="w-full h-full object-cover" />
      </div>
      
      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 py-20 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <p className="text-secondary text-sm md:text-base mb-4 tracking-widest uppercase animate-fade-in font-serif">
          The Wedding of
        </p>
        
        <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-primary mb-6 animate-fade-in-up text-gradient-gold">
          Azka & Nayla
        </h1>
        
        <div className="relative max-w-2xl mx-auto mb-8 animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent rounded-lg transform rotate-1" />
          <div className="relative overflow-hidden rounded-lg shadow-elegant border-4 border-secondary/30">
            <img 
              src={heroCouple} 
              alt="Andi & Siti" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          </div>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-4 animate-fade-in-up font-serif">
          <p className="text-lg md:text-xl text-muted-foreground italic leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <p className="text-sm md:text-base text-muted-foreground font-semibold">
            - QS. Ar-Rum: 21 -
          </p>
        </div>
      </div>
      
      {/* Ornament Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30 transform rotate-180">
        <img src={goldOrnament} alt="" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default HeroSection;
