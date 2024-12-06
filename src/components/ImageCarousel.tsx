import { useEffect, useRef, useState } from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const images = [
  "/img/img-1.jpg",
  "/img/img-2.jpg",
  "/img/img-3.jpg",
  "/img/img-1.jpg",
  "/img/img-2.jpg",
  "/img/img-3.jpg",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (carouselRef.current) {
      const firstImage = carouselRef.current.querySelector("img");
      if (firstImage) {
        setImageWidth(firstImage.clientWidth);
      }
    }
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Box
      className="relative flex w-full max-w-2xl mx-auto overflow-hidden mt-10"
      ref={carouselRef}
    >
      <motion.div
        className="flex md:gap-8 gap-5"
        animate={{ x: `-${currentIndex * imageWidth}px` }}
        transition={{ duration: 0.5 }}
        style={{ display: "flex" }}
      >
        {images.map((src, index) => (
          <Box
            key={index}
            className="flex-shrink-0 md:w-[300px] w-full h-[600px]"
            cursor="pointer"
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="rounded-lg w-full h-full object-cover"
            />
          </Box>
        ))}
      </motion.div>

      {/* Buttons */}
      <IconButton
        aria-label="Previous Slide"
        onClick={handlePrev}
        position="absolute"
        left="2"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        className="text-black rounded-full p-2 bg-white"
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        aria-label="Next Slide"
        onClick={handleNext}
        position="absolute"
        right="2"
        top="50%"
        transform="translateY(-50%)"
        zIndex="10"
        className="text-black rounded-full p-2 bg-white"
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
}
