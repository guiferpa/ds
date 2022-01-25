import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import UserProfileMenuSection from './UserProfileMenuSection';

export default {
  title: 'Components/UserProfileMenuSection',
  component: UserProfileMenuSection,
  args: {
    title: "Hey, I'm section title",
    items: [
      { label: "Item 1", href: "/#" },
      { label: "Item 2", href: "/#" }
    ]
  }
} as ComponentMeta<typeof UserProfileMenuSection>;

const Template: ComponentStory<typeof UserProfileMenuSection> = (args) => <UserProfileMenuSection {...args}> I'm a heading </UserProfileMenuSection>;

export const Simple = Template.bind({});
Simple.args = {};