import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box, Text } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const images = ["/img/img-1.jpg", "/img/img-2.jpg", "/img/img-3.jpg"];

const Welcoming = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBgIndex}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentBgIndex]})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 6,
          }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <Box className="relative z-10 text-white h-full flex flex-col justify-between items-center p-10">
          <Text className="text-lg font-bold uppercase font-poppins tracking-wider">
            Wedding Announcement
          </Text>
          <Box mt="16" textAlign="center">
            <Text className="font-butler tracking-wider text-4xl">
              Tiffany & Jared
            </Text>
            <Text className="text-3xl font-newsreader font-normal leading-tight tracking-tight italic">
              #TImetoshaRE
            </Text>
          </Box>
          <Text className="text-lg font-bold uppercase font-poppins tracking-wider self-end flex items-center gap-2 cursor-pointer">
            Scroll to Begin <ChevronDown size={20} />
          </Text>
        </Box>
      </AnimatePresence>
    </div>
  );
};

export default Welcoming;
