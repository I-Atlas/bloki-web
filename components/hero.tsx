import { Stack, Heading, Text, Tag, TagLabel } from "@chakra-ui/react";

import { Section } from "components/section";
import Image, { StaticImageData } from "next/image";
import BackgroundDecoration from "./background-decoration";

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
  return (
    <Section id={sectionId} position="relative">
      <Stack
        align="center"
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", lg: "row" }}
      >
        {imageDirection === "left" && (
          <Image src={image} placeholder="blur" alt="hero-image" />
        )}
        <Stack
          textAlign="start"
          alignItems={{ base: "center", lg: "start" }}
          flex={1}
          spacing={{ base: 2, md: 8 }}
        >
          <Heading
            lineHeight={1.1}
            fontWeight={700}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            {title}
          </Heading>
          <Text color="gray.500">{description}</Text>
        </Stack>
        {imageDirection === "right" && (
          <Image src={image} placeholder="blur" alt="hero-image" />
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
