"use client";

import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionButton = motion(Button);

const Cover = ({ onOpenInvitation }: { onOpenInvitation: () => void }) => {
  return (
    <motion.div
      className="relative h-screen bg-[url('/img/cover.jpg')] bg-cover bg-center p-10 text-white md:w-[40vw] w-screen text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        y: "-100vh",
        opacity: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <VStack spaceY="10" mt="28" className="relative z-10 text-white">
        <Text className="text-lg font-bold uppercase font-poppins tracking-wider">
          Wedding Announcement
        </Text>
        <VStack spaceY="8">
          <Box mt="16">
            <Text className="font-butler tracking-wider text-4xl">
              Tiffany & Jared
            </Text>
            <Text className="text-3xl font-newsreader font-normal leading-tight tracking-tight italic">
              #TImetoshaRE
            </Text>
          </Box>

          <MotionButton
            className="font-newsreader text-black bg-white rounded-none px-8 py-0 hover:bg-slate-300 italic"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
            onClick={onOpenInvitation}
          >
            Open
          </MotionButton>
        </VStack>
      </VStack>
    </motion.div>
  );
};

export default Cover;
