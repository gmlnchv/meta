import { ThemeProvider } from "../src"

// https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
export const parameters = {
  // https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args
  actions: { argTypesRegex: '^on.*' },
  layout: 'centered'
};

// Wrap each story in <ChakraProvider> to get access to theme variables
// https://storybook.js.org/docs/react/writing-stories/decorators
export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
]