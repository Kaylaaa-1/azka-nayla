import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Music, Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  isPlaying: boolean;
  onToggle: () => void;
}

const MusicPlayer = ({ isPlaying, onToggle }: MusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(err => console.log("Audio play error:", err));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <>
      <audio 
        ref={audioRef} 
        loop
        src="assets/wedding.mp3"
      />
      
      <Button
        onClick={onToggle}
        size="icon"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-primary shadow-gold transition-all duration-300 hover:scale-110"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6" />
        ) : (
          <VolumeX className="w-6 h-6" />
        )}
      </Button>
    </>
  );
};

export default MusicPlayer;
