import type { ReactNode, FC } from "react";

import NextLink from "next/link";

import {
  Stack,
  Text,
  useDisclosure,
  SimpleGrid,
  IconButton,
  Divider,
  ButtonGroup,
  useColorModeValue,
} from "@chakra-ui/react";

import { NavigationLink } from "components/link/navigation-link";

import { footerData } from "helpers/footer";
import { FaGithub } from "react-icons/fa";
import { InterfaceContainer } from "components/interface-container";
import { LogoNoColor } from "./icons/logo-no-color";

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
    <InterfaceContainer
      as="footer"
      role="contentinfo"
      py={4}
      innerWidth={1440}
      mx="auto"
      w={["90%", "85%", "80%"]}
    >
      <Stack py={4} alignItems="center">
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
          py={4}
        >
          <Stack spacing={6}>
            <NextLink href="/" passHref>
              <LogoNoColor h={63} w={199} />
            </NextLink>
          </Stack>
          {footerData.elements.map((element, index) => (
            <Stack key={index} align={"flex-start"}>
              <FooterLinkHeader>{element.name}</FooterLinkHeader>
              {element.links.map((link, index) => (
                <NavigationLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: "column-reverse", md: "row" }}
        align="center"
      >
        <Text fontSize="md">{footerData.copyright}</Text>
        <ButtonGroup variant="ghost">
          <NextLink href={footerData.github} passHref>
            <IconButton
              as="a"
              aria-label="GitHub"
              icon={<FaGithub fontSize="2.5rem" />}
              rounded="full"
            />
          </NextLink>
        </ButtonGroup>
      </Stack>
    </InterfaceContainer>
  );
}
