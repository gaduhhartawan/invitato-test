import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

const SideCover = () => {
  return (
    <Box
      className="relative bg-[url('/img/sidecover.jpg')] bg-cover bg-center h-[100vh] p-10"
      display={{ base: "none", md: "block" }}
      width={{ base: "0", md: "60vw" }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <VStack align="start" spaceY="3" className="relative z-10 text-white">
        <Text className="text-lg font-bold uppercase font-poppins tracking-wider">
          Wedding Announcement
        </Text>
        <Heading className="font-butler tracking-wider text-7xl">
          Tiffany & <br />
          Jared
        </Heading>
        <VStack spaceY="1" align="start" className="max-w-[90%]">
          <Text className="text-sm font-newsreader font-normal leading-tight tracking-wide italic">
            {'"'}Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
            sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
            mencintaimu dengan sederhana; dengan isyarat yang tak sempat
            disampaikan awan kepada hujan yang menjadikannya tiada.{'"'}
          </Text>
          <Text className="text-sm font-newsreader font-normal leading-tight tracking-wide italic">
            — Sapardi Djoko Damono
          </Text>
        </VStack>
      </VStack>
    </Box>
  );
};

export default SideCover;
