import type { VFC } from "react";

import { VStack, Text, Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

export interface PageTitleProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export const PageTitle: VFC<PageTitleProps> = ({
  title,
  description,
  ...props
}) => {
  return (
    <VStack spacing={[4, null, 8]} alignItems="flex-start" {...props}>
      <Heading as="h1" textStyle="h1" textAlign="left">
        {title}
      </Heading>
      <Text
        as="div"
        textStyle="subtitle"
        align="left"
        color={useColorModeValue("gray.500", "gray.400")}
      >
        {description}
      </Text>
    </VStack>
  );
};
