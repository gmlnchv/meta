import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system"
import { cx } from "@chakra-ui/utils"
import * as React from "react"

export interface TokenProps
  extends HTMLChakraProps<"span">,
    ThemingProps<"Token"> {}

/**
 * Component used to display design tokens or variables.
 */
export const Token = forwardRef<TokenProps, "span">((props, ref) => {
  const styles = useStyleConfig("Token", props)
  const { className, ...rest } = omitThemingProps(props)

  return (
    <chakra.span
      ref={ref}
      className={cx("dp-token", props.className)}
      {...rest}
      __css={{
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...styles,
      }}
    />
  )
})
