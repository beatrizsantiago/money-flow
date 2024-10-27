import type { Meta, StoryObj } from '@storybook/react';
 
import Button from '../components/Button';
 
const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text: 'Default Button',
  },
};

export const Secondary: Story = {
  args: {
    text: 'Secondary Button',
    color: 'secondary',
  },
};

export const PrimaryOutlined: Story = {
  args: {
    text: 'Primary Outlined Button',
    outlined: true,
  },
};

export const SecondaryOutlined: Story = {
  args: {
    text: 'Secondary Outlined Button',
    color: 'secondary',
    outlined: true,
  },
};

export const Disabled: Story = {
  args: {
    text: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    text: 'Loading Button',
    loading: true,
    disabled: true,
  },
};
