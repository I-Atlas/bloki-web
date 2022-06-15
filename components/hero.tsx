import { Stack, Heading, Text, useBreakpointValue } from "@chakra-ui/react";

import { Section } from "components/section";
import { StaticImageData } from "next/image";
import BackgroundDecoration from "./background-decoration";
import { HeroImage } from "./hero-image";

export interface HeroProps {
  sectionId: string;
  image: string | StaticImageData;
  imageDirection: "right" | "left";
  title: string;
  description: string;
  decorationVerticalAlign?: string;
  decorationHorizontalAlign?: string;
}

export default function Hero({
  sectionId,
  image,
  imageDirection,
  title,
  description,
  decorationHorizontalAlign,
  decorationVerticalAlign,
}: HeroProps) {
  const calculatedImageDirection = useBreakpointValue({
    base: "right",
    lg: imageDirection,
  });
  return (
    <Section
      mx="auto"
      w={["90%", "85%", "80%"]}
      id={sectionId}
      position="relative"
    >
      <Stack
        align="center"
        spacing={{ base: 4, md: 10 }}
        direction={{ base: "column", lg: "row" }}
      >
        {calculatedImageDirection === "left" && (
          <HeroImage placeholder="blur" alt="hero-image" image={image} />
        )}
        <Stack
          mr={{
            base: calculatedImageDirection === "right" ? 4 : 0,
            lg: calculatedImageDirection === "right" ? 10 : 0,
          }}
          mb={{
            base: calculatedImageDirection === "right" ? 8 : 0,
            lg: calculatedImageDirection === "right" ? 10 : 0,
          }}
          textAlign="start"
          alignItems={{ base: "center", lg: "start" }}
          spacing={{ base: 2, md: 8 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={400}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        {calculatedImageDirection === "right" && (
          <HeroImage placeholder="blur" alt="hero-image" image={image} />
        )}
      </Stack>
      {decorationHorizontalAlign && decorationVerticalAlign && (
        <BackgroundDecoration
          horizontalAlign={decorationHorizontalAlign}
          verticalAlign={decorationVerticalAlign}
        />
      )}
    </Section>
  );
}
