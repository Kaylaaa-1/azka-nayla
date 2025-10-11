import { Heart, Users, Gift, Sparkles } from "lucide-react";

const OurStorySection = () => {
  const timeline = [
    {
      icon: Users,
      title: "Pertemuan Pertama",
      date: "Januari 2020",
      description: "Kami bertemu pertama kali di sebuah acara pernikahan teman. Takdir mempertemukan kami dalam keindahan dan kebahagiaan."
    },
    {
      icon: Heart,
      title: "Menjalin Hubungan",
      date: "Maret 2020",
      description: "Setelah beberapa bulan saling mengenal, kami memutuskan untuk memulai hubungan yang serius dengan restu kedua orang tua."
    },
    {
      icon: Gift,
      title: "Lamaran",
      date: "Agustus 2024",
      description: "Di hadapan keluarga besar, kami resmi bertunangan dan berkomitmen untuk membangun masa depan bersama."
    },
    {
      icon: Sparkles,
      title: "Pernikahan",
      date: "Desember 2025",
      description: "Kami akan melangkah ke jenjang pernikahan untuk menyatukan dua keluarga dalam ikatan yang suci."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-script text-5xl md:text-6xl text-secondary mb-4">
            Kisah Cinta Kami
          </h2>
          <div className="w-24 h-0.5 bg-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-serif">
            Perjalanan indah yang membawa kami hingga hari bahagia ini
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10" />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-elegant border-2 border-secondary/20 hover:shadow-gold transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <Icon className="w-6 h-6 text-secondary" />
                        <h3 className="font-serif text-xl font-bold text-primary">
                          {item.title}
                        </h3>
                      </div>
                      
                      <p className="text-secondary font-semibold text-sm mb-3 font-serif">
                        {item.date}
                      </p>
                      
                      <p className="text-muted-foreground leading-relaxed font-serif">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStorySection;
