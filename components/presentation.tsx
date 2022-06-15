import { Stack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { Section } from "components/section";
import { StaticImageData } from "next/image";
import { HeroImage } from "./hero-image";

export interface PresentationProps {
  sectionId: string;
  image: string | StaticImageData;
  title: string;
}

export default function Presentation({
  sectionId,
  image,
  title,
}: PresentationProps) {
  return (
    <Section
      mx="auto"
      w={["90%", "85%", "80%"]}
      id={sectionId}
      position="relative"
      mb={{
        base: 0,
        lg: 32,
      }}
    >
      <Stack align="center" direction="column">
        <Heading
          mb={{
            base: 8,
            lg: 10,
          }}
          textAlign="center"
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          {title}
        </Heading>
        <HeroImage image={image} placeholder="empty" alt="presentation-image" />
      </Stack>
    </Section>
  );
}
