import NextLink from "next/link";
import {
  Flex,
  HStack,
  useDisclosure,
  IconButton,
  Container,
} from "@chakra-ui/react";
import { NavigationLink } from "components/link/navigation-link";

import { BlokiIcon } from "components/icons/bloki";
import { routerLinks } from "helpers/configs";
import { CgClose, CgMenu } from "react-icons/cg";
import MobileNavigation from "components/mobile-navigation";
import { ButtonLink } from "components/link/button-link";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container py={4} maxW={1440} mx="auto" w={["90%", "85%", "80%"]}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NextLink href="/" passHref>
          <BlokiIcon h={36} w={36} />
        </NextLink>
        <HStack
          as="nav"
          alignItems="center"
          spacing={4}
          display={["none", "none", "flex"]}
        >
          {/* {routerLinks.map((link, index) => (
            <NavigationLink
              key={index}
              name={link.name}
              path={link.path}
              onClose={onClose}
            />
          ))} */}
          <ButtonLink
          href="/login"
          display={["none", "none", "inherit"]}
          rounded="md"
          variant="ghost"
          colorScheme="black"
          fontWeight={600}
        >
          Войти
        </ButtonLink>
        <ButtonLink
          href="/login"
          display={["none", "none", "inherit"]}
          rounded="md"
          variant="solid"
          colorScheme="orange"
          fontWeight={600}
        >
          Попробовать
        </ButtonLink>
        </HStack>

        <IconButton
          variant="ghost"
          color="current"
          size={"md"}
          icon={isOpen ? <CgClose /> : <CgMenu />}
          aria-label={"Open Menu"}
          display={["inherit", "inherit", "none"]}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>
      <MobileNavigation isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}
