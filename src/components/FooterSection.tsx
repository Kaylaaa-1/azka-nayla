import { Heart } from "lucide-react";
import goldOrnament from "@/assets/gold-ornament.png";

const FooterSection = () => {
  return (
    <footer className="relative py-12 px-6 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 batik-pattern opacity-10" />
      
      {/* Top Ornament */}
      <div className="absolute top-0 left-0 right-0 h-20 opacity-20">
        <img src={goldOrnament} alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <Heart className="w-12 h-12 mx-auto text-secondary animate-float" fill="currentColor" />
        
        <div className="space-y-2">
          <p className="text-cream text-lg font-serif italic">
            "Cinta yang sejati adalah ketika dua hati bersatu dalam satu tujuan"
          </p>
        </div>
        
        <div className="w-32 h-0.5 bg-secondary/50 mx-auto" />
        
        <div className="space-y-1">
          <p className="font-script text-4xl text-secondary">
            Azka & Nayla
          </p>
          <p className="text-cream/80 text-sm font-serif">
            06 April 2026
          </p>
        </div>
        
        <div className="pt-8 border-t border-secondary/20">
          <p className="text-cream/60 text-sm font-serif">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kami.
          </p>
        </div>
        
        <div className="pt-4">
          <p className="text-cream/40 text-xs font-serif">
            Wassalamu'alaikum Wr. Wb.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
