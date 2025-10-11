import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

interface GuestBookSectionProps {
  guestName: string;
}

interface Message {
  name: string;
  message: string;
  date: string;
}

const GuestBookSection = ({ guestName }: GuestBookSectionProps) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      name: "Rini Susanti",
      message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Barakallah!",
      date: "2 hari yang lalu"
    },
    {
      name: "Budi Santoso",
      message: "Congratulations! Wishing you both a lifetime of love and happiness together.",
      date: "3 hari yang lalu"
    },
    {
      name: "Dewi Kartika",
      message: "MasyaAllah, bahagia sekali melihat kalian berdua. Semoga langgeng sampai kakek nenek ya!",
      date: "5 hari yang lalu"
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (message.trim().length < 10) {
      toast.error("Pesan terlalu pendek, minimal 10 karakter");
      return;
    }

    const newMessage: Message = {
      name: guestName || "Tamu Undangan",
      message: message.trim(),
      date: "Baru saja"
    };

    setMessages([newMessage, ...messages]);
    setMessage("");
    toast.success("Ucapan Anda telah terkirim!");
  };

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Doa & Ucapan
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-serif">
            Berikan doa dan ucapan terbaik untuk kami
          </p>
        </div>

        {/* Form */}
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-elegant border-2 border-secondary/20 mb-8 animate-scale-in">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 font-serif">
                Nama Anda
              </label>
              <input
                type="text"
                value={guestName}
                disabled
                className="w-full p-3 rounded-lg border-2 border-secondary/20 bg-muted/50 text-foreground font-serif"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2 font-serif">
                Ucapan & Doa
              </label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan ucapan dan doa terbaik Anda..."
                className="min-h-32 resize-none border-2 border-secondary/20 focus:border-secondary font-serif"
                maxLength={500}
              />
              <p className="text-xs text-muted-foreground mt-2 text-right font-serif">
                {message.length}/500 karakter
              </p>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-secondary hover:bg-secondary/90 text-primary font-semibold rounded-full shadow-gold transition-all duration-300 hover:scale-105 font-serif"
            >
              <Send className="w-4 h-4 mr-2" />
              Kirim Ucapan
            </Button>
          </form>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-primary flex items-center gap-2 font-serif">
            <MessageCircle className="w-6 h-6 text-secondary" />
            Ucapan dari Tamu ({messages.length})
          </h3>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
            {messages.map((msg, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-secondary/10 hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-primary font-serif">{msg.name}</h4>
                  <span className="text-xs text-muted-foreground font-serif">{msg.date}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed font-serif">
                  {msg.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuestBookSection;
