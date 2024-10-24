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
    kind: 'DEPOSIT',
    value: 100,
    date: '2021-01-01',
    onEditClick: () => console.log('Edit'),
    onDeleteClick: () => console.log('Delete'),
  },
};

export const Transfer: Story = {
  args: {
    kind: 'DOC_TED',
    value: -100,
    date: '2021-02-01',
  },
};

export const CurrencyExchange: Story = {
  args: {
    kind: 'CURRENCY_EXCHANGE',
    value: -1000,
    date: '2021-03-01',
  },
};

export const Leasing: Story = {
  args: {
    kind: 'LEASING',
    value: -1000,
    date: '2021-04-01',
  },
};
