import type { ReactNode, FC } from "react";

import NextLink from "next/link";

import {
  Stack,
  Text,
  useDisclosure,
  SimpleGrid,
  Input,
  IconButton,
  Container,
  Divider,
  Flex,
  VStack,
} from "@chakra-ui/react";

import { NavigationLink } from "components/link/navigation-link";
import { BlokiIcon } from "components/icons/bloki";

import { BsArrowRight } from "react-icons/bs";
import { configs } from "helpers/configs";
import { ColorModeSwitcher } from "components/color-mode-switcher";

interface FooterLinkHeaderProps {
  children: ReactNode;
}

const FooterLinkHeader: FC<FooterLinkHeaderProps> = ({ children }) => {
  return (
    <Text px={2} fontWeight={"500"} mb={2} color={"gray.500"}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const { onClose } = useDisclosure();
  return (
    <Container
      as="footer"
      role="contentinfo"
      py={4}
      maxW={1440}
      mx="auto"
      w={["90%", "85%", "80%"]}
    >
      <Stack alignItems="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={12}
          py={4}
        >
          <Stack spacing={6}>
            <NextLink href="/" passHref>
              <BlokiIcon h={36} w={56} />
            </NextLink>
            <ColorModeSwitcher ml={0} />
          </Stack>
          <Stack align={"flex-start"}>
            <FooterLinkHeader>Legal</FooterLinkHeader>
            {configs.terms.map((link, index) => (
              <NavigationLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <FooterLinkHeader>Social</FooterLinkHeader>
            {configs.social.map((link, index) => (
              <NavigationLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <FooterLinkHeader>Legal</FooterLinkHeader>
            {configs.terms.map((link, index) => (
              <NavigationLink
                key={index}
                name={link.name}
                path={link.path}
                onClose={onClose}
              />
            ))}
          </Stack>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
