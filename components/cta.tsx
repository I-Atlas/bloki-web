import type { FC } from "react";

import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Box, Stack, VStack } from "@chakra-ui/layout";
import { Button, StylesProvider } from "@chakra-ui/react";
import { useMultiStyleConfig, omitThemingProps } from "@chakra-ui/react";

import type { SectionProps } from "components/section";
import { Section } from "components/section";
import { SectionTitle } from "components/title/section-title";

export interface CTAAction extends ChakraButtonProps {
  label: string;
  href?: string;
}

export interface CTAProps extends Omit<SectionProps, "children"> {
  title: string;
  description?: React.ReactNode;
  action?: CTAAction;
  secondaryAction?: CTAAction;
  variant?: "subtle" | "solid" | "light";
  children?: React.ReactNode;
  aside?: React.ReactNode;
}

const ActionButton: FC<CTAAction> = ({ label, ...actionProps }) => {
  return <Button {...actionProps}>{label}</Button>;
};

export default function CTASection(props: CTAProps) {
  const {
    title,
    description,
    action,
    secondaryAction,
    variant,
    children,
    aside,
  } = props;

  const align = !!aside ? "left" : "center";

  const styles = useMultiStyleConfig("CTA", props);

  const ownProps = omitThemingProps(props);

  let actionBtn;
  if (action) {
    actionBtn = (
      <ActionButton
        colorScheme={variant === "solid" ? "secondary" : "primary"}
        sx={styles.action}
        {...action}
      />
    );
  }

  let secondaryBtn;
  if (secondaryAction) {
    secondaryBtn = (
      <ActionButton
        variant="ghost"
        colorScheme="white"
        sx={styles.secondaryAction}
        {...secondaryAction}
      />
    );
  }

  return (
    <StylesProvider value={styles}>
      <Section sx={styles.wrapper} {...ownProps}>
        <Stack direction="row">
          <VStack flex="1" align={align}>
            <SectionTitle
              title={title}
              description={description}
              align={align}
              variant={variant === "solid" ? "light" : "default"}
            />
            <Stack direction="row">
              {actionBtn}
              {secondaryBtn}
              {children}
            </Stack>
          </VStack>
          {aside && (
            <Box flex="1" p="8">
              {aside}
            </Box>
          )}
        </Stack>
      </Section>
    </StylesProvider>
  );
}
