import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ChakraProviderProps } from "@chakra-ui/provider"

import theme from "."

export default function ThemeProvider(props: ChakraProviderProps) {
  return <ChakraProvider resetCSS={false} {...props} theme={theme} />
}
