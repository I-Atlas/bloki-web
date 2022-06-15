import { Stack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { Section } from "components/section";
import { StaticImageData } from "next/image";
import { HeroImage } from "./hero-image";

export interface HeroTitleProps {
  sectionId: string;
  titlePartOne: string;
  titlePartTwo: string;
}

export default function HeroTitle({
  sectionId,
  titlePartOne,
  titlePartTwo,
}: HeroTitleProps) {
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
      <Stack
        textAlign="center"
        alignItems="center"
        spacing={{ base: 4, md: 6 }}
      >
        <Heading
          textAlign="center"
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
        >
          {titlePartOne}
        </Heading>
        <Heading
          textAlign="center"
          lineHeight={1.1}
          fontWeight={400}
          fontSize={{ base: "2xl", sm: "3xl", lg: "5xl" }}
          color="orange"
        >
          {titlePartTwo}
        </Heading>
      </Stack>
    </Section>
  );
}
