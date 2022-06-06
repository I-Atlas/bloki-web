import type { VFC } from "react";

import type { StackProps } from "@chakra-ui/layout";
import { VStack, Heading, Text } from "@chakra-ui/layout";
import { useMultiStyleConfig } from "@chakra-ui/react";

export interface SectionTitleProps extends Omit<StackProps, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  variant?: string;
}

export const SectionTitle: VFC<SectionTitleProps> = ({
  title,
  description,
  align,
  variant,
  ...props
}) => {
  const styles = useMultiStyleConfig("SectionTitle", { variant });

  return (
    <VStack
      sx={styles.wrapper}
      alignItems={align === "left" ? "flex-start" : "center"}
      py={12}
      {...props}
    >
      <Heading sx={styles.title} as="h2">
        {title}
      </Heading>
      {description && (
        <Text sx={styles.description} textAlign={align}>
          {description}
        </Text>
      )}
    </VStack>
  );
};
