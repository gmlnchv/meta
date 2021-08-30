import {
  chakra,
  forwardRef,
  omitThemingProps,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Text,
} from "@chakra-ui/react"

import { cx } from "@chakra-ui/utils"
import * as React from "react"

export interface TokenProps
  extends HTMLChakraProps<"span">,
    ThemingProps<"Token"> {
  value: string
}

/**
 * Component used to display design tokens or variables.
 */
export const Token = forwardRef<TokenProps, "span">((props, ref) => {
  const styles = useStyleConfig("Token", props)
  const { className, value, ...rest } = omitThemingProps(props)

  return (
    <Popover placement="top" variant="responsive" trigger="hover" flip={false}>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent w="auto">
        <PopoverBody py={1} textAlign="center">
          <Text fontSize="xs" my={0} color="gray.600">
            {value}
          </Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
})
