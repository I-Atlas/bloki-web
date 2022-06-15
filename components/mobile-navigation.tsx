import { Box, Stack, useBreakpointValue } from "@chakra-ui/react";
import { NavigationLink } from "components/link/navigation-link";

import { routerLinks } from "helpers/configs";
import { RemoveScroll } from "react-remove-scroll";
import { MotionBox } from "styles/motion";
import { AnimatePresence } from "framer-motion";
import { ButtonLink } from "components/link/button-link";
import { ColorModeSwitcher } from "./color-mode-switcher";

interface MobileNavigationProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function MobileNavigation({
  onClose,
  isOpen,
}: MobileNavigationProps) {
  const showOnBreakpoint = useBreakpointValue({ base: true, md: false });
  return (
    <AnimatePresence exitBeforeEnter>
      {showOnBreakpoint && isOpen && (
        <RemoveScroll>
          <MotionBox
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            h="calc(100vh - 80px)"
            w="full"
          >
            <Stack
              w="full"
              h="full"
              bg={"transparent"}
              align={"center"}
              justifyContent={"center"}
              spacing={8}
            >
              {/* {routerLinks.map((link, index) => (
                <NavigationLink
                  key={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                  fontSize={"3xl"}
                />
              ))} */}
              <ColorModeSwitcher ml={0} />
                <ButtonLink
                  href="https://bloki.app/"
                  rounded="md"
                  variant="solid"
                  fontWeight={600}
                  w="full"
                >
                  Войти
                </ButtonLink>
                <ButtonLink
                  href="https://bloki.app/"
                  rounded="md"
                  variant="solid"
                  colorScheme="orange"
                  fontWeight={600}
                  w="full"
                >
                  Попробовать
                </ButtonLink>
            </Stack>
          </MotionBox>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}
