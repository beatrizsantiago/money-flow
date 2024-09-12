import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
 
import { Colors } from './Colors';
 
const meta: Meta<typeof Colors> = {
  component: Colors,
  parameters: {
    layout: 'centered',
  },
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Examples: Story = {
  render: () => <Colors />,
};
