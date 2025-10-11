import { Heart } from "lucide-react";

const CoupleSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Assalamu'alaikum Wr. Wb.
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-serif">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          {/* Groom */}
          <div className="text-center md:text-right animate-fade-in-up space-y-4">
            <h3 className="font-script text-4xl md:text-5xl text-primary mb-2">
              Muhammad Azka Zulkarnain
            </h3>
            <p className="text-lg text-foreground font-serif">
              Putra pertama dari
            </p>
            <p className="text-base text-muted-foreground font-serif">
              Bapak H. Ahmad Wijaya & Ibu Hj. Aminah
            </p>
          </div>

          {/* Heart Divider */}
          <div className="flex justify-center md:hidden">
            <Heart className="w-10 h-10 text-secondary animate-float" fill="currentColor" />
          </div>
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
            <Heart className="w-12 h-12 text-secondary animate-float" fill="currentColor" />
          </div>

          {/* Bride */}
          <div className="text-center md:text-left animate-fade-in-up space-y-4">
            <h3 className="font-script text-4xl md:text-5xl text-primary mb-2">
              Ni'matul Naylal Qur'ani
            </h3>
            <p className="text-lg text-foreground font-serif">
              Putri pertama dari
            </p>
            <p className="text-base text-muted-foreground font-serif">
              Bapak H. Sutrisno & Ibu Hj. Siti Khadijah
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
