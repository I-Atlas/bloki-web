import type { FC } from "react";

import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";

import type { LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { Link as ChakraLink } from "@chakra-ui/react";

export type LinkProps = NextLinkProps & ChakraLinkProps;

export const Link: FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href} passHref>
      <ChakraLink {...props}>{children}</ChakraLink>
    </NextLink>
  );
};
