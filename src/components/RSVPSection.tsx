import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

interface RSVPSectionProps {
  guestName: string;
}

const RSVPSection = ({ guestName }: RSVPSectionProps) => {
  const [attendance, setAttendance] = useState<'yes' | 'no' | null>(null);
  const [guestCount, setGuestCount] = useState<number>(1);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (attendance === null) {
      toast.error("Mohon pilih konfirmasi kehadiran");
      return;
    }

    // In a real app, this would send to backend
    setSubmitted(true);
    toast.success(
      attendance === 'yes' 
        ? `Terima kasih! Kami menantikan kehadiran ${guestName}` 
        : "Terima kasih atas konfirmasinya"
    );
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Konfirmasi Kehadiran
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-serif">
            Mohon konfirmasi kehadiran Anda
          </p>
        </div>

        {!submitted ? (
          <div className="bg-card p-8 rounded-lg shadow-elegant border-2 border-secondary/20 animate-scale-in">
            <div className="mb-8">
              <label className="block text-lg font-semibold text-foreground mb-4 font-serif">
                Apakah Anda akan hadir?
              </label>
              
              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => setAttendance('yes')}
                  variant={attendance === 'yes' ? 'default' : 'outline'}
                  className={`h-16 text-base font-serif ${
                    attendance === 'yes' 
                      ? 'bg-secondary text-primary hover:bg-secondary/90' 
                      : 'border-secondary/30 hover:border-secondary'
                  }`}
                >
                  <Check className="w-5 h-5 mr-2" />
                  Ya, Hadir
                </Button>
                
                <Button
                  onClick={() => setAttendance('no')}
                  variant={attendance === 'no' ? 'default' : 'outline'}
                  className={`h-16 text-base font-serif ${
                    attendance === 'no' 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'border-secondary/30 hover:border-secondary'
                  }`}
                >
                  <X className="w-5 h-5 mr-2" />
                  Tidak Hadir
                </Button>
              </div>
            </div>

            {attendance === 'yes' && (
              <div className="mb-8 animate-fade-in">
                <label className="block text-lg font-semibold text-foreground mb-4 font-serif">
                  Jumlah Tamu
                </label>
                
                <div className="flex items-center gap-4">
                  <Button
                    onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
                    variant="outline"
                    size="icon"
                    className="border-secondary/30 hover:border-secondary"
                  >
                    -
                  </Button>
                  
                  <span className="text-2xl font-bold text-primary font-serif w-16 text-center">
                    {guestCount}
                  </span>
                  
                  <Button
                    onClick={() => setGuestCount(Math.min(5, guestCount + 1))}
                    variant="outline"
                    size="icon"
                    className="border-secondary/30 hover:border-secondary"
                  >
                    +
                  </Button>
                  
                  <span className="text-muted-foreground font-serif">
                    orang
                  </span>
                </div>
              </div>
            )}

            <Button
              onClick={handleSubmit}
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold text-base rounded-full shadow-gold transition-all duration-300 hover:scale-105 font-serif"
            >
              Kirim Konfirmasi
            </Button>
          </div>
        ) : (
          <div className="bg-card p-8 rounded-lg shadow-elegant border-2 border-secondary/20 text-center animate-scale-in">
            <Check className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-primary mb-2 font-serif">
              Terima Kasih!
            </h3>
            <p className="text-muted-foreground font-serif">
              Konfirmasi Anda telah kami terima
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVPSection;
