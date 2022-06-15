import NextLink from "next/link";
import { Flex, HStack, useDisclosure, IconButton } from "@chakra-ui/react";
import { NavigationLink } from "components/link/navigation-link";

import { LogoColor } from "components/icons/logo-color";
import { routerLinks } from "helpers/configs";
import { CgClose, CgMenu } from "react-icons/cg";
import MobileNavigation from "components/mobile-navigation";
import { ButtonLink } from "components/link/button-link";
import { InterfaceContainer } from "components/interface-container";
import { ColorModeSwitcher } from "./color-mode-switcher";

export default function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InterfaceContainer py={4} maxW={1440} mx="auto" w={["90%", "85%", "80%"]}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <NextLink href="/" passHref>
          <LogoColor h={36} w={36} />
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
          <ColorModeSwitcher ml={0} />
          <ButtonLink
            href="https://bloki.app/"
            display={["none", "none", "inherit"]}
            rounded="md"
            variant="ghost"
            fontWeight={600}
          >
            Войти
          </ButtonLink>
          <ButtonLink
            href="https://bloki.app/"
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
    </InterfaceContainer>
  );
}
