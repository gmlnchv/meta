import { Token, TokenProps } from "../../src"

export default {
  title: "Primitives/Token",
  component: Token,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
}

export const Basic = {
  args: {
    children: "gray.200",
    value: "#E5E7EB",
  },
  render: (args: TokenProps) => <Token {...args} />,
}
