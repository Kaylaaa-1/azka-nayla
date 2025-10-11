import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  const akadDate = new Date("2026-04-06T09:00:00");
  const resepsiDate = new Date("2026-04-06T11:00:00");

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit',
      timeZone: 'Asia/Jakarta'
    }) + ' WIB';
  };

  return (
    <section className="py-20 px-6 bg-muted/50 batik-pattern">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Acara Pernikahan
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Akad Nikah */}
          <div className="bg-card p-8 rounded-lg shadow-elegant border-2 border-secondary/20 animate-fade-in-up">
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6 text-center">
              Akad Nikah
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif">
                    {formatDate(akadDate)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif">
                    {formatTime(akadDate)} - Selesai
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif mb-1">
                    Masjid Agung Karawang
                  </p>
                  <p className="text-sm text-muted-foreground font-serif">
                    Jl. Tuparev, Karawang, Jawa Barat
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Resepsi */}
          <div className="bg-card p-8 rounded-lg shadow-elegant border-2 border-secondary/20 animate-fade-in-up">
            <h3 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-6 text-center">
              Resepsi
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Calendar className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif">
                    {formatDate(resepsiDate)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif">
                    {formatTime(resepsiDate)} - Selesai
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground font-serif mb-1">
                    Gedung Graha Karawang
                  </p>
                  <p className="text-sm text-muted-foreground font-serif">
                    Jl. Siliwangi No. 63, Karawang, Jawa Barat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-primary font-semibold px-8 rounded-full shadow-gold transition-all duration-300 hover:scale-105 font-serif"
            onClick={() => window.open("https://maps.app.goo.gl/y86rLEzy2zh9qcDz7", "_blank")}
          >
            <MapPin className="w-5 h-5 mr-2" />
            Buka Google Maps
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
