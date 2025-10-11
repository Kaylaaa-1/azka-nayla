import { useState, useEffect } from "react";
import LandingPage from "@/components/LandingPage";
import MusicPlayer from "@/components/MusicPlayer";
import HeroSection from "@/components/HeroSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import CountdownTimer from "@/components/CountdownTimer";
import OurStorySection from "@/components/OurStorySection";
import RSVPSection from "@/components/RSVPSection";
import GuestBookSection from "@/components/GuestBookSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const [showLanding, setShowLanding] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    // Get guest name from URL parameter
    const params = new URLSearchParams(window.location.search);
    const name = params.get("to") || "Tamu Undangan";
    setGuestName(decodeURIComponent(name));
  }, []);

  const handleEnter = () => {
    setShowLanding(false);
    setIsPlaying(true);
  };

  if (showLanding) {
    return <LandingPage guestName={guestName} onEnter={handleEnter} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <MusicPlayer isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
      
      <HeroSection />
      <CoupleSection />
      <CountdownTimer />
      <EventSection />
      <OurStorySection />
      <RSVPSection guestName={guestName} />
      <GuestBookSection guestName={guestName} />
      <FooterSection />
    </div>
  );
};

export default Index;
