import type { PropsWithChildren } from "react";

import { Box } from "@chakra-ui/react";

import Footer from "components/footer";
import Navigation from "components/navigation";

export default function AppLayout({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Navigation />
      <Box textAlign="center" fontSize="lg" mx="auto">
        {children}
      </Box>
      <Footer />
    </>
  );
}
