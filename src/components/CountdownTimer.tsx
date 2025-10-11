import { useState, useEffect } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const weddingDate = new Date("2026-04-06T09:00:00").getTime();
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 batik-pattern opacity-10" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-script text-4xl md:text-5xl text-secondary mb-8 animate-fade-in">
          Menghitung Hari
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds }
          ].map((item, index) => (
            <div 
              key={item.label}
              className="bg-card/10 backdrop-blur-sm p-6 rounded-lg border-2 border-secondary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2 font-serif">
                {String(item.value).padStart(2, '0')}
              </div>
              <div className="text-sm md:text-base text-cream uppercase tracking-wider font-serif">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;
