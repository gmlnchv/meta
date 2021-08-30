import { Token, TokenProps } from '../../src/components/Token';

export default { 
  title: 'Primitives/Token',
  component: Token,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
};

export const Basic = {
  args: {
    children: 'gray.200'
  },
  render: (args: TokenProps) => <Token {...args} />
}
