"use client";
import Cover from "../components/Cover";
import { AnimatePresence, motion } from "framer-motion";
import { useInvitationStore } from "@/store/invitationStore";
import { Menu, Volume2, VolumeX } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import Welcoming from "@/components/Welcoming";
import Opening from "@/components/Opening";

const MenuButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => (
  <button
    onClick={onClick}
    className="rounded-full p-2 text-white bg-[#997A5E]"
  >
    {children}
  </button>
);

export default function Home() {
  const { isCoverVisible, setIsCoverVisible } = useInvitationStore();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!isCoverVisible && !isPlaying) {
      handlePlayMusic();
    }
  }, [isCoverVisible]);

  const handleOpenInvitation = () => {
    setIsCoverVisible(false);
  };

  const handlePlayMusic = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/music/song.mp3");
      audioRef.current.loop = true;
    }

    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleToggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isCoverVisible ? (
        <Cover key="cover" onOpenInvitation={handleOpenInvitation} />
      ) : (
        <>
          <motion.div
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-screen overflow-y-scroll md:w-[40vw] w-screen"
          >
            <Welcoming />
            <Opening />
          </motion.div>
          <div className="fixed bottom-5 left-5 text-white flex items-center gap-2">
            <MenuButton>
              <Menu size={14} />
            </MenuButton>
            <MenuButton onClick={handleToggleMusic}>
              {isPlaying ? <Volume2 size={14} /> : <VolumeX size={14} />}
            </MenuButton>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
