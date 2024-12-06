import { Box } from "@chakra-ui/react";
import { useInView, motion } from "framer-motion";
import React, { ReactNode, useRef } from "react";
import ImageCarousel from "./ImageCarousel";

const AnimatedText = ({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className: string;
  delay: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 50,
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50,
      }}
      transition={{
        duration: 0.6,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const Opening = () => {
  return (
    <Box textAlign="center" className="p-10">
      <AnimatedText
        className="uppercase font-poppins font-bold tracking-widest"
        delay={0.2}
      >
        Dear mr-mrs-ms,
      </AnimatedText>

      <AnimatedText
        className="uppercase font-poppins font-bold tracking-widest"
        delay={0.4}
      >
        Family & friends
      </AnimatedText>

      <AnimatedText
        className="font-butler text-3xl font-bold tracking-wider mt-16"
        delay={0.6}
      >
        Welcome to <br /> Tiffany & Jared{"'"}s <br /> Wedding Website
      </AnimatedText>

      <AnimatedText
        className="font-newsreader text-base italic tracking-wide text-[#1A1B1D] mt-12"
        delay={0.8}
      >
        Together with joyful hearts and the grace of God, we joyfully announce
        the upcoming of our marriage.
      </AnimatedText>

      {/* Carousel - Disini */}
      <ImageCarousel />
    </Box>
  );
};

export default Opening;
