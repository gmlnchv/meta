import * as React from "react"
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react"
import theme from "."

export default function ThemeProvider(props: ChakraProviderProps) {
  return <ChakraProvider resetCSS={false} {...props} theme={theme} />
}
