import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import { ChakraProviderProps } from "@chakra-ui/provider"

import theme from "../theme"

export const ThemeProvider: React.FC<ChakraProviderProps> = (props) => {
  return <ChakraProvider resetCSS={false} {...props} theme={theme} />
}
