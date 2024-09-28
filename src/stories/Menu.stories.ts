import type { Meta, StoryObj } from '@storybook/react';
 
import Menu from '../components/Menu';
 
const meta: Meta<typeof Menu> = {
  component: Menu,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'Light',
    },
  },
  tags: ['autodocs'],
};
 
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { title: 'Home', onClick: () => alert('Home') },
      { title: 'About', onClick: () => alert('About') },
      { title: 'Contact', onClick: () => alert('Contact') },
    ],
    activeIndex: 0,
  },
};

export const Inline: Story = {
  args: {
    items: [
      { title: 'Home', onClick: () => alert('Home') },
      { title: 'About', onClick: () => alert('About') },
      { title: 'Contact', onClick: () => alert('Contact') },
    ],
    activeIndex: 0,
    inline: true,
  },
};

export const White: Story = {
  args: {
    items: [
      { title: 'Home', onClick: () => alert('Home') },
      { title: 'About', onClick: () => alert('About') },
      { title: 'Contact', onClick: () => alert('Contact') },
    ],
    activeIndex: 0,
    isWhite: true,
  },
  parameters: {
    backgrounds: {
      default: 'Dark',
    },
  },
};
