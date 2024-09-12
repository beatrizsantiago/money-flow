import type { Meta, StoryObj } from '@storybook/react';
 
import { Fonts } from './Fonts';
 
const meta: Meta<typeof Fonts> = {
  component: Fonts,
  parameters: {
    layout: 'centered',
  },
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
