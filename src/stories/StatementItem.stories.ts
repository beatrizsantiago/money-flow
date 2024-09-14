import type { Meta, StoryObj } from '@storybook/react';
 
import StatementItem from '../components/StatementItem';
 
const meta: Meta<typeof StatementItem> = {
  component: StatementItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Deposit: Story = {
  args: {
    kind: 'deposit',
    value: 100,
    date: '2021-01-01',
  },
};

export const Transfer: Story = {
  args: {
    kind: 'transfer',
    value: -100,
    date: '2021-02-01',
  },
};
