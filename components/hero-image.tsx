import type { FC } from "react";
import Image, { StaticImageData } from "next/image";
import { MotionBox } from "styles/motion";
import { AnimatePresence } from "framer-motion";

export interface HeroImageProps {
  image: string | StaticImageData;
  placeholder?: "blur" | "empty" | undefined;
  alt?: string | undefined;
}

export const HeroImage: FC<HeroImageProps> = ({ image, placeholder, alt }) => {
  return (
    <AnimatePresence>
      <MotionBox
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        // @ts-ignore
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0.8 },
        }}
        boxShadow="sm"
        borderRadius="10px"
      >
        <Image
          style={{ borderRadius: "10px" }}
          src={image}
          placeholder={placeholder}
          alt={alt}
        />
      </MotionBox>
    </AnimatePresence>
  );
};
