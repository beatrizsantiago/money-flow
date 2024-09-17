import type { Meta, StoryObj } from '@storybook/react';
 
import Select from '../components/Select';
 
const meta: Meta<typeof Select> = {
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    placeholder: 'Selecione uma opção',
    onChange: (value) => console.log(value),
  },
};
