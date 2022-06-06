import { ReactElement } from "react";
import { Box, BoxProps, useBreakpointValue } from "@chakra-ui/react";
import { BackgroundDecorationIcon } from "./icons/background-decoration";

const decorationOffsetX = 0;
const decorationOffsetY = 0;

export default function BackgroundDecoration(props: {
  horizontalAlign: string;
  verticalAlign: string;
}): ReactElement {
  const properties: BoxProps = {};
  const h = useBreakpointValue({
    lg: '527px',
    xl: '627px',
    "2xl": '827px',
  });
  const w = useBreakpointValue({
    lg: "190px",
    xl: '140px',
    "2xl": '240px',
  });

  if (props.horizontalAlign === "left") {
    properties.left = -decorationOffsetX;
  } else if (props.horizontalAlign === "right") {
    properties.right = -decorationOffsetX;
    properties.transform = "rotate(180deg)";
  }

  if (props.verticalAlign === "top") {
    properties.top = -decorationOffsetY;
  } else if (props.verticalAlign === "bottom") {
    properties.bottom = -decorationOffsetY;
  }

  return (
    <>
      <Box
        position="absolute"
        display={["none", "none", "inline-block"]}
        zIndex={-1}
        {...properties}
      >
        <BackgroundDecorationIcon h={h} w={w} />
      </Box>
    </>
  );
}
