import type { Meta, StoryObj } from '@storybook/react';
 
import Input from '../components/Input';
 
const meta: Meta<typeof Input> = {
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    placeholder: 'Primary Input',
  },
};

export const Secondary: Story = {
  args: {
    placeholder: 'Secondary Input',
    color: 'secondary',
  },
};

export const BlueGray: Story = {
  args: {
    placeholder: 'BlueGray Input',
    color: 'bluegray',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error Input',
    error: true,
  },
};
